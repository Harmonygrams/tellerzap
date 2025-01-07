'use client';
import { CustomInput } from "@/components/ui/custom-input"
import { CustomLabel } from "@/components/ui/custom-label"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { addCompany } from "@/app/actions/add-company"
import { useActionState} from "react"

export function PaymentDetailsForm () {
    const [, action, pending] = useActionState(addCompany, { message : '', success : false})
    return (
        <form className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5" action={action}>
            <div>
                <div className="">
                    <div className="flex flex-col">
                `       <div className="">
                            <CustomLabel name="Bank name" />
                            <CustomInput name="bankName" placeholder="Zenith Bank" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Account number" />
                            <CustomInput name="accountNumber" placeholder="2178546722" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Account name" />
                            <CustomInput name="accountName" placeholder="Harmony" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="IFSC code" />
                            <CustomInput name="ifsc" placeholder="HSB23432342" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Routing number" />
                            <CustomInput name="routingNumber" placeholder="0816621124" type="text" disabled = {false}/>
                        </div>
                        <div className="mt-5">
                            <CustomLabel name="Swift Code" />
                            <CustomInput name="swiftCode" placeholder="ZENGL2345" type="text" disabled = {false}/>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <SubmitButton success={pending}/>
                </div>
            </div>
        </form>
    )
}

function SubmitButton ({success} : {success : boolean}) {
    return <Button disabled={success} type="submit" className="w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-color duration-200 h-10 text-[18px]">{success ? <Loader2 className="animate-spin"/> : "Continue"} </Button>
}