'use client'
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { CustomInput } from "@/components/ui/custom-input"
import { CustomLabel } from "@/components/ui/custom-label"
import { FormTitle } from "@/components/ui/formTitle"
import { Button } from "@/components/ui/button"
import { auth } from '@/app/firebase/config'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { FormEvent } from "react"
import { useRouter } from "next/navigation"

interface SignupDetails {
    email : string; 
    password : string; 
}

export function SignupForm () {
    const [signupDetails, setSignupDetails] = useState<SignupDetails>({
        email : '', 
        password : ''
    })
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);
    const [createUserWuthEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const handleSignup = async (e:FormEvent<HTMLFormElement>) => {
        setLoading(true)
        try{
            e.preventDefault()
            const res = await createUserWuthEmailAndPassword(signupDetails.email, signupDetails.password)
            console.log(res);
            setSignupDetails({
                email : '', 
                password : ''
            })
            setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }
    return(
        <form className="border mx-auto max-w-[400px] mt-20 p-10 rounded-lg" onSubmit={handleSignup}>
            <FormTitle title="Create a new account"/>
            <div className="flex flex-col gap-5 mt-5">
                <div>
                    <CustomLabel name="Email"/>
                    <CustomInput name="email" placeholder="Email" type="email" disabled={loading} value={signupDetails.email} handleChange={(e) => setSignupDetails(prev => ({...prev, [e.target.name] : e.target.value}) )}/>
                </div>
                <div>
                    <CustomLabel name="Password"/>
                    <CustomInput name="password" placeholder="Password" type="password" disabled={loading} value={signupDetails.password} handleChange={(e) => setSignupDetails(prev => ({...prev, [e.target.name] : e.target.value}))}/>
                </div>
                <SubmitButton success={loading}/>
            </div>

            {/* Signup Route */}
            <div className="text-center mt-5">
                <p className="text-sm text-gray-600">
                    Already have an account? <a href="/login" className="text-purple-500 hover:underline">Sign in</a>
                </p>
            </div>
    </form>
    )
}
function SubmitButton ({success} : {success : boolean}) {
    return <Button disabled={success} type="submit" className="w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-color duration-200 h-10 text-[18px]">{success ? <Loader2 className="animate-spin"/> : "Continue"} </Button>
}
