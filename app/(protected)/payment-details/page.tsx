import { Hero } from "@/app/components/hero"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { PageTitle } from "@/components/ui/pageTitle"
import { PaymentDetailsForm } from "./components/payment-details-form"
export default function Payment () {
    return(
        <div className='max-w-[1200px] mx-auto w-[95%] mb-10'>
            {/* Hero Section */}
            <Hero />
            {/* Breadcrumb */}
            <Breadcrumb className="mt-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Payment</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/*  Fill in company details */}
            <div className="mt-5">
                <PageTitle title="Payment Details"/>
                <p>Setup payment details </p>
            </div>
            <PaymentDetailsForm />
        </div>
    )
}