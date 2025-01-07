import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document {
    email: string;
    paymentDetail : {
        bankName : string; 
        accountNumber : string; 
        accountName : string; 
        ifscCode : string; 
        routingNumber : string; 
        swiftCode : string;
    },
    company: {
        businessName: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        taxId: string;
    }
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    paymentDetails : {
        bankName : { type : String, trim : true}, 
        accountNumber : { type : String, trim : true}, 
        accountName : { type : String, trim : true}, 
        ifscCode : { type : String, trim : true}, 
        routingNumber : { type : String, trim : true},
        swiftCode : { type : String, trim : true}
    },
    company: {
        businessName: {
            type: String,
            trim: true,
            default : "Business name"
        },
        address: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        zip: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true
        },
        taxId: {
            type: String,
            trim: true
        }
    }
}, {
    timestamps: true
});

// Index for email uniqueness
userSchema.index({ email: 1 }, { unique: true });

// Compound index for company location
userSchema.index({ 
    'company.country': 1, 
    'company.state': 1, 
    'company.city': 1 
});

export const User: mongoose.Model<IUser> = mongoose.models.User as mongoose.Model<IUser> || 
    mongoose.model<IUser>("User", userSchema);