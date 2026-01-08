"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { IconAsterisk, IconAt, IconUser } from "@tabler/icons-react";

import { useActionState } from "react";
import { signUpWithEmail } from "@/app/actions/auth/signup";

function LoginPage() {
    const [state, formAction, isPending] = useActionState(
        signUpWithEmail,
        null
    );

    return (
        <div className="flex flex-col gap-8 w-80">
            <div className="text-2xl text-center">
                Welcome to the dentistry classification app{" "}
                <span className="text-primary">signup</span>
            </div>

            <form className="flex flex-col gap-4" action={formAction}>
                <InputGroup>
                    <InputGroupInput placeholder="full name" name="name"/>
                    <InputGroupAddon align={"inline-end"}>
                        <IconUser className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                    <InputGroupInput type="email" placeholder="email" name="email" />
                    <InputGroupAddon align={"inline-end"}>
                        <IconAt className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                    <InputGroupInput type="password" placeholder="password" name="password" />
                    <InputGroupAddon align={"inline-end"}>
                        <IconAsterisk className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                    <InputGroupInput
                        type="password"
                        placeholder="repeat password"
                        name="password_repeat"
                    />
                    <InputGroupAddon align={"inline-end"}>
                        <IconAsterisk className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <Button type="submit" disabled={isPending} size={"lg"}>
                    {isPending ? 'Creating account...' : 'Signup'}
                </Button>
            </form>

            <Link
                href={"/login"}
                className="text-primary font-medium text-sm ml-1 text-center"
            >
                Have an account? Log In
            </Link>

            {state?.error && (
                <div className="rounded-md px-3 py-2 text-sm text-red-500">
                    {state.error}
                </div>
            )}
        </div>
    );
}

export default LoginPage;
