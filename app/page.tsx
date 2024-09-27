"use client"

import { useFormState, useFormStatus } from "react-dom";
import { handleForm } from "./HandleForm";
import { InputHTMLAttributes } from "react";


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

interface InputProps {
    name: string;
    errors?: string[];
}

const InputWithErrors = ({ errors = [], name, ...rest }:
    InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <>
        <input
            className="w-[360px] h-12 border-2 rounded-2xl my-1"
            name={name}
            type={name}
            required
            {...rest}
        />
        {errors.map((error, index) =>
            <span key={index} className="text-red-500 font-light text-sm">
                {error}
            </span>
        )}
        </>
    )
}

export default function Home() {

    const [state, action] = useFormState(handleForm, {success:false});

    return (
        <div className="bg-orange-50 w-screen h-screen flex justify-center items-center">
            <form
                className="border-2 w-[400px] h-[300px] flex flex-col items-center"
                action={action}
            >
                <InputWithErrors
                    name="email"
                    placeholder="Email"
                    errors={state.error?.fieldErrors.email}
                />
                <InputWithErrors
                    name="name"
                    placeholder="Name"
                    errors={state.error?.fieldErrors.name}
                />
                <InputWithErrors
                    name="password"
                    placeholder="Password"
                    errors={state.error?.fieldErrors.password}
                />
                <ButtonComp />
                {state.success ?
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
