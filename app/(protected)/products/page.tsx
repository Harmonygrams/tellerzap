import { Hero } from "@/app/components/hero"
import { ProductManager } from "./components/product-manager"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
export default async function Products () {
    return(
        <div className='max-w-[1200px] mx-auto w-[95%]'>
            <Hero />
            {/* Breadcrumb */}
            <Breadcrumb className="mt-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Products</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Action Buttons */}
            <section className="mt-5">
                <ProductManager />
            </section>
            {/* List of products */}
        </div>
    )
}