'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { CustomLabel } from "@/components/ui/custom-label"
import { CustomInput } from "@/components/ui/custom-input"
import { FormTitle } from "@/components/ui/formTitle";
import { Loader2 } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { baseUrl } from "@/utils/baseUrl";

interface Product {
    id : string;
    name : string; 
    price : number;
}
interface AddProductProps {
    isOpen : boolean;
    handleChange : () => void;
    id : string;
}
export function EditProduct ({isOpen, handleChange, id } : AddProductProps) {
    const [name, setName] = useState<string>('');
    const queryClient = useQueryClient()
    const [price, setPrice ] = useState<string | number>('0.00')
    const {data, isLoading, isSuccess} = useQuery<Product>({
        queryKey : ['product'], 
        queryFn : async () => {
            const fetchProduct = await fetch(`${baseUrl()}/products/${id}`)
            if(fetchProduct.ok){
                const fetchProductJson = await fetchProduct.json()
                return fetchProductJson;
            }
        }, 
    })
    const {mutate, isPending} = useMutation({
        mutationFn : async () => {
            await fetch(`${baseUrl()}/products/${id}`, { method : 'put', body : JSON.stringify({name, price})})
        }, 
        onSuccess : () => {
            setName('')
            setPrice('')
            queryClient.invalidateQueries({ queryKey : ['products']})
            handleChange();
        }
    })
    useEffect(() => {
        if(isSuccess){
            setName(data.name)
            setPrice(data.price)
        }
    }, [isSuccess, isLoading, data])
    return(
            <Dialog open={isOpen} onOpenChange={handleChange}>
                <DialogContent className="h-[500px] w-[90%] mx-auto rounded-lg flex flex-col">
                    <DialogHeader className="flex-1">
                    <DialogTitle><FormTitle title="Edit a product"/></DialogTitle>
                    <DialogDescription className="flex-1 flex flex-col">
                        <div className="flex flex-col flex-1">
                            <div className="mt-5">
                                <CustomLabel name={'Product name'}/>
                                <CustomInput disabled={isPending || isLoading} type="text" placeholder="Name your product" name={"name"} value={name} handleChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mt-5">
                                <CustomLabel name={'Price'}/>
                                <CustomInput disabled={isPending || isLoading} type="number" placeholder="0.00" name="price" value={price} handleChange={(e) => setPrice(e.target.value)}/>
                            </div>
                            <div className="border mt-auto">
                                <SubmitButton success = {isPending || isLoading} handleSubmit={mutate}/>
                            </div>
                        </div>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    )
}
function SubmitButton ({success, handleSubmit} : {success : boolean, handleSubmit : () => void}) {
    return <Button disabled={success} type="submit" className="w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-color duration-200 h-10 text-[18px]" onClick={handleSubmit}>{success ? <Loader2 className="animate-spin"/> : "Update"} </Button>
}