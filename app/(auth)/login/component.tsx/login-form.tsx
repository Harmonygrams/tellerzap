'use client'
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomLabel } from "@/components/ui/custom-label";
import { FormTitle } from "@/components/ui/formTitle";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { signIn } from '@/app/firebase/sign-out';

const HOME_PAGE = process.env.HOME_PAGE as string;

interface LoginDetails {
    email: string;
    password: string;
}

export function LoginForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect_to") ?? HOME_PAGE;

    const handleSignup = async (ev: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        setErrorMessage('');
        ev.preventDefault();
        try {
            await signIn(loginDetails.email, loginDetails.password);
            console.log('done')
            router.push("/products")
            setLoading(false);
        } catch (err) {
            console.log(err)
            setLoading(false);
            setErrorMessage('Invalid login credentials. Please try again.');
        }
    };

    return (
        <form className="border mx-auto max-w-[400px] mt-20 p-10 rounded-lg" onSubmit={handleSignup}>
            <FormTitle title="Login" />

            {/* Error Message */}
            {errorMessage && (
                <div className="text-red-500 text-center mb-4">
                    {errorMessage}
                </div>
            )}
            <div className="flex flex-col gap-5 mt-5">
                <div>
                    <CustomLabel name="Email" />
                    <CustomInput
                        name="email"
                        placeholder="Email"
                        type="email"
                        disabled={loading}
                        value={loginDetails.email}
                        handleChange={(e) =>
                            setLoginDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
                        }
                    />
                </div>
                <div>
                    <CustomLabel name="Password" />
                    <CustomInput
                        name="password"
                        placeholder="Password"
                        type="password"
                        disabled={loading}
                        value={loginDetails.password}
                        handleChange={(e) =>
                            setLoginDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
                        }
                    />
                </div>
                <SubmitButton success={loading} />
            </div>

            {/* Signup Route */}
            <div className="text-center mt-5">
                <p className="text-sm text-gray-600">
                    Don’t have an account? <a href="/signup" className="text-purple-500 hover:underline">Sign up</a>
                </p>
            </div>
        </form>
    );
}

function SubmitButton({ success }: { success: boolean }) {
    return (
        <Button
            disabled={success}
            type="submit"
            className="w-full bg-purple-500 font-semibold hover:bg-purple-600 transition-color duration-200 h-10 text-[18px]"
        >
            {success ? <Loader2 className="animate-spin" /> : "Continue"}
        </Button>
    );
}
