import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { IconAsterisk, IconAt, IconUser } from "@tabler/icons-react";

function LoginPage() {
    return (
        <div className="flex flex-col gap-8 w-80">
            <div className="text-2xl text-center">
                Welcome to the dentistry classification app{" "}
                <span className="text-primary">signup</span>
            </div>

            <div className="flex flex-col gap-4">
                <InputGroup>
                    <InputGroupInput placeholder="full name" />
                    <InputGroupAddon align={"inline-end"}>
                        <IconUser className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

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

                <InputGroup>
                    <InputGroupInput
                        type="password"
                        placeholder="repeat password"
                    />
                    <InputGroupAddon align={"inline-end"}>
                        <IconAsterisk className="size-3" />
                    </InputGroupAddon>
                </InputGroup>

                <Button size={"lg"}>Signup</Button>
            </div>

            <Link
                href={"/login"}
                className="text-primary font-medium text-sm ml-1 text-center"
            >
                Have an account? Log In
            </Link>
        </div>
    );
}

export default LoginPage;
