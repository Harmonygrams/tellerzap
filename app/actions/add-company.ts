'use server';
import { User } from "@/models/user.model";
interface FormState {
    message : string,
    success : boolean
}
export async function addCompany (formState : FormState, formData : FormData) {
    try {
        const email = formData.get("email");
        const address = formData.get("address");
        const city = formData.get("city"); 
        const state = formData.get("state"); 
        const zip = formData.get("zip")
        const country = formData.get("country")
        const taxId = formData.get("taxId")
        await User.create({
            email,
            company : {
                address, 
                city, 
                state, 
                zip, 
                country, 
                taxId, 
            }   
        })
        return {message : '', success : true}
    }catch(error){
        console.log(error);
        return {message : 'Failed to add company', success : false}
    }
}