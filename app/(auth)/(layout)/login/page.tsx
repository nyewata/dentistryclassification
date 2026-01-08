import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    InputGroup,
    InputGroupInput,
    InputGroupAddon,
} from "@/components/ui/input-group";
import { IconAt, IconAsterisk } from "@tabler/icons-react";

function LoginPage() {
    return (
        <div className="flex flex-col gap-8 w-80">
            <div className="text-2xl text-center">
                Welcome to the dentistry classification app{" "}
                <span className="text-primary">login</span>
            </div>

            <div className="flex flex-col gap-4">
                <InputGroup>
                    <InputGroupInput type="email" placeholder="email" />
                    <InputGroupAddon align={"inline-end"}>
                        <IconAt className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                    <InputGroupInput type="password" placeholder="password" />
                    <InputGroupAddon align={"inline-end"}>
                        <IconAsterisk className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <Link
                    href={"/forgotpassword"}
                    className="text-primary font-medium text-sm ml-1"
                >
                    Forgot password?
                </Link>

                <Button size={"lg"}>Log In</Button>
            </div>

            <Link
                href={"/signup"}
                className="text-primary font-medium text-sm ml-1 text-center"
            >
                Don't have an account? Sign Up
            </Link>
        </div>
    );
}

export default LoginPage;
