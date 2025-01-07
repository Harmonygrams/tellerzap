'use client';

import { AddProduct } from "./add-product"
import { useState } from "react"
import { PageTitle } from "@/components/ui/pageTitle"
import { ProductCard } from "./product-card"
import { EmptySearch } from "@/components/empty-search"
import { useQuery } from "@tanstack/react-query";
import { ProductsSkeleton } from "./product-skeleton"

interface Product {
    _id: string;
    name: string;
    price: number;
    image?: string;
}

export function ProductManager() {
    const { data: products = [], isLoading } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: async () => {
            const fetchProducts = await fetch('http://localhost:3000/api/products', { method: 'GET' })
            if (fetchProducts.ok) {
                const fetchProductsJson = await fetchProducts.json()
                return fetchProductsJson
            }
            return []
        }
    })

    const [addProductIsOpen, setAddProductIsOpen] = useState(false)

    return (
        <div>
            <AddProduct isOpen={addProductIsOpen} handleChange={() => setAddProductIsOpen(prev => !prev)} />
            {isLoading ? (
                <ProductsSkeleton />
            ) : (
                <>
                    {!products.length && <EmptySearch />}
                    {products.length > 0 && (
                        <div className="mt-5">
                            <PageTitle title="Products" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5">
                                {products.map((product) => (
                                    <ProductCard
                                        name={product.name}
                                        price={product.price}
                                        key={product._id}
                                        id={product._id}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

