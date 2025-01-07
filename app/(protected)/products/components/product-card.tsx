import Image from "next/image"
import { Ellipsis, Trash2, Loader2, Pencil } from "lucide-react"
import {  useState } from "react";
import { EditProduct } from "./edit-product";
import { useQueryClient } from "@tanstack/react-query";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
  
interface ProductCardProps {
    id : string;
    name: string;
    price: number;
    image?: string;
}
export function ProductCard ({name, price, id}: ProductCardProps) {
    const [isDeleting, setIsDeleting] = useState<boolean>(false); 
    const [openEdit, setOpenEdit] = useState<boolean>(false); 
    const queryClient = useQueryClient()
    async function deleteProduct () {
        setIsDeleting(true); 
        const deleteProductReq = await fetch(`http://localhost:3000/api/products`, { method : 'delete', body : JSON.stringify(id)})
        if(deleteProductReq.ok){
            setIsDeleting(false)
            queryClient.invalidateQueries({queryKey : ['products']})
        }else{
            setIsDeleting(false)
        }
    }
    return(
        <div className="cursor-pointer">
            {/* Image background */}
            <div className="bg-gray-200 min-w-44 min-w-h-44 rounded-md p-2 flex items-center justify-center relative group">
                <Image src={'/images/placeholder-image.png'} width={150} height={150} alt="Product image"/>
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2">
                    <div className="flex justify-end">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-white text-gray-700 p-2 rounded-md hover:bg-purple-500"><Ellipsis /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64">
                                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => setOpenEdit(true)}> 
                                    <Pencil />
                                    <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={deleteProduct} disabled={isDeleting}> 
                                    {isDeleting ? <Loader2 className="animate-spin"/> :<Trash2 /> }
                                    <span>Move to trash</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div> 
                </div>
            </div>
            {/* Name */}
            <p className="font-semibold text-gray-700 mt-2">{name}</p>
            {/* Price */}
            <p className="font-normal text-gray-600">{price}</p>
            {openEdit && <EditProduct 
                id={id}
                isOpen = {openEdit}
                handleChange={() => {setOpenEdit(false)}}
            />}
        </div>
    )
}