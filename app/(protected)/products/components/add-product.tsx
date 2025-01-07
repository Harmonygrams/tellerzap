'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useActionState, useEffect } from "react";
import { Plus} from 'lucide-react'
import { CustomLabel } from "@/components/ui/custom-label"
import { CustomInput } from "@/components/ui/custom-input"
import { addProductAction } from "@/app/actions/add-product";
import { FormTitle } from "@/components/ui/formTitle";
import { Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
interface AddProductProps {
    isOpen : boolean;
    handleChange : () => void;
}
export function AddProduct ({isOpen, handleChange} : AddProductProps) {
    const [state, action, pending] = useActionState(addProductAction, { message : '', success : false})
    const queryClient = useQueryClient()
    useEffect(() => {
        if(state.success) {
            queryClient.invalidateQueries({ queryKey : ['products']})
            handleChange();
        }
    }, [state, queryClient])
    return(
            <Dialog open={isOpen} onOpenChange={handleChange}>
                <DialogTrigger asChild>
                    <Button type='button' variant={'outline'} className="font-semibold border-gray-300 h-10 md:h-12">
                        <Plus />
                        <span>Add new </span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="h-[500px] w-[90%] mx-auto rounded-lg flex flex-col">
                    <DialogHeader className="flex-1">
                    <DialogTitle><FormTitle title="Create a product"/></DialogTitle>
                    <DialogDescription className="flex-1 flex flex-col">
                        <form action={action} className="flex flex-col flex-1">
                            <div className="mt-5">
                                <CustomLabel name={'Product name'}/>
                                <CustomInput disabled={pending} type="text" placeholder="Name your product" name={"name"}/>
                            </div>
                            <div className="mt-5">
                                <CustomLabel name={'Price'}/>
                                <CustomInput disabled={pending} type="number" placeholder="0.00" name="price"/>
                            </div>
                            <div className="border mt-auto">
                                <SubmitButton success = {pending}/>
                            </div>
                        </form>
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    )
}
function SubmitButton ({success} : {success : boolean}) {
    return <Button disabled={success} type="submit" className="w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-color duration-200 h-10 text-[18px]">{success ? <Loader2 className="animate-spin"/> : "Continue"} </Button>
}