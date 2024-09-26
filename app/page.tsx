"use client"

import { useFormState, useFormStatus } from "react-dom";
import { handleForm } from "./HandleForm";

const ButtonComp = () => {
    const { pending } = useFormStatus();

    return (
        <button 
            className="w-[360px] h-12 border-2 rounded-2xl my-1"
            disabled={pending}
        >
            {pending ? "Loading..." : "Login"}
        </button>
    )
}

export default function Home() {

    const [state, action] = useFormState(handleForm, false);

    return (
        <div className="bg-orange-50 w-screen h-screen flex justify-center items-center">
            <form 
                className="border-2 w-[400px] h-[300px] flex flex-col items-center"
                action={action}
            >
                <input
                    className="w-[360px] h-12 border-2 rounded-2xl my-1"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    className="w-[360px] h-12 border-2 rounded-2xl my-1"
                    name="name"
                    type="name"
                    placeholder="Name"
                    required
                />
                <input
                    className="w-[360px] h-12 border-2 rounded-2xl my-1"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                />
                <ButtonComp />
                {state ?
                    <div>
                        Welcome Back!
                    </div>
                    :
                    null
                }
            </form>
        </div>
    );
}
