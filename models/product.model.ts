import mongoose, { mongo, Schema } from "mongoose";
export interface Iproduct extends mongoose.Document {
    name : string; 
    price : number;
}
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    
}, {timestamps : true})
export const Product:mongoose.Model<Iproduct> = mongoose.models.Product as mongoose.Model<Iproduct> || mongoose.model("Product", productSchema);