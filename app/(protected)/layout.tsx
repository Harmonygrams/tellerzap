'use client';
import { useUser, signOut } from "../firebase/sign-out";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
    const user = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only redirect if we're sure there's no user and we've finished initial loading
        if (user === null) {
            router.push('/login');
        } else if (user) {
            // We have a user, so we can stop loading
            setIsLoading(false);
        }
    }, [user, router]);

    // Show loading state while we're determining auth status
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500" />
            </div>
        );
    }

    // If we have a user and we're not loading, show the protected content
    if (user) {
        return (
            <div className="p-4">
                <div className="flex justify-end mb-4">
                    <Button onClick={signOut}>Sign Out</Button>
                </div>
                {children}
            </div>
        );
    }

    // This return is just for TypeScript completeness
    // The actual redirect is handled in the useEffect
    return null;
}