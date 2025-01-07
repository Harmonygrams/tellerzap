import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/models/product.model";
export async function GET (req: NextRequest, { params} : { params : { id : string }}){
    try {
        const getParams = await params; 
        const id = getParams.id; 
        const fetchProduct = await Product.findById(id, { id : 1, name : 1, price : 1});
        return NextResponse.json(fetchProduct);
    }catch(err){ 
        console.log(err)
        return NextResponse.json({success : false })
    }
}
export async function PUT (req : NextRequest, { params} : { params : { id : string}}) {
    try {
        const awaitParams = await params; 
        const body = await req.json();
        const { name, price  } = body; 
        console.log('name and price is ', name, ' ', price)
        const { id } = awaitParams;
        if(!id){
            return NextResponse.json({success : false, status : 400})    
        }
        //Fetch the product details 
        const fetchProductDetails = await Product.findById(id, { name : 1, price : 1}); 
        //Update product details 
        if(!fetchProductDetails){
            return NextResponse.json({status : 404, success : false })
        }
        console.log(id)
        await Product.findByIdAndUpdate(id, {
            name : name || fetchProductDetails.name,
            price : price || fetchProductDetails.price
        })
        return NextResponse.json({ success : true,  })
    }catch(err){
        console.log(err); 
        return NextResponse.json({ success : false })
    }
}