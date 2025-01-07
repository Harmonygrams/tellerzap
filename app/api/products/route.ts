import { Product } from "@/models/product.model";
import { NextRequest, NextResponse  } from "next/server";
export async function GET(){
    try {
        const products = await Product.find();
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        return NextResponse.json({products : []});
    }
}

export async function DELETE(req : NextRequest){
    try{
        const { id } = await req.json()
        await Product.deleteOne({ id : id })
        return NextResponse.json({success : true})
    }catch(error){
        console.log(error);
        return NextResponse.json({success : false})
    }
}