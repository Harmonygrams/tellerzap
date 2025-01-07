'use client';
import { CustomInput } from "@/components/ui/custom-input"
import { CustomLabel } from "@/components/ui/custom-label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { addCompany } from "@/app/actions/add-company"
import { useActionState} from "react"

export function CompanyDetailsForm () {
    const [, action, pending] = useActionState(addCompany, { message : '', success : false})
    return (
        <form className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5" action={action}>
            <div>
                {/* First column */}
                <div>
                    <CustomLabel name="Business name" />
                    <CustomInput name="businessName" placeholder="Enter your business name" type="text" disabled = {false}/>
                </div>
                {/* Last column */}
                <div className="mt-5">
                    <p>Billing Details </p>
                    <div className="flex flex-col">
                `       <div className="">
                            <CustomLabel name="Address" />
                            <CustomInput name="address" placeholder="43 Tetlow" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="City" />
                            <CustomInput name="city" placeholder="Owerri" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="State" />
                            <CustomInput name="state" placeholder="Imo" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Zip" />
                            <CustomInput name="zip" placeholder="460221" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Country" />
                            <CustomInput name="country" placeholder="Nigeria" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Tax ID" />
                            <CustomInput name="taxId" placeholder="GSTIN 1234" type="text" disabled = {false}/>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <SubmitButton success={pending}/>
                </div>
            </div>
            <Separator orientation="vertical" />
        </form>
    )
}

function SubmitButton ({success} : {success : boolean}) {
    return <Button disabled={success} type="submit" className="w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-color duration-200 h-10 text-[18px]">{success ? <Loader2 className="animate-spin"/> : "Continue"} </Button>
}