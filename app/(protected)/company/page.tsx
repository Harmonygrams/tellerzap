import { CompanyDetailsForm } from "./components/company-details-form"
import { Hero } from "../../components/hero"
import { PageTitle } from "@/components/ui/pageTitle"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
export default function Page () {
    return (
        <div className='max-w-[1200px] mx-auto w-[95%] mb-10'>
            {/* Company Hero  */}
            <Hero />
            {/* Breadcrumb */}
            <Breadcrumb className="mt-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Company</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/*  Fill in company details */}
            <div className="mt-5">
                <PageTitle title="Company Details"/>
                <p>Fill in your company details </p>
            </div>
            <CompanyDetailsForm />
        </div>
    )
}