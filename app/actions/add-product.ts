'use server'; 
import { Product } from "@/models/product.model";
interface FormState {
    message : string,
    success : boolean
}
export async function addProductAction ( formState : FormState, formData : FormData) {
    try {
        const name = formData.get('name');
        const price = formData.get('price');
        const product = new Product({name, price});
        await product.save();
        return {message : '', success : true}
    } catch (error) {
        console.log(error);
        return {message : 'Failed to add product', success : false}
    }
}