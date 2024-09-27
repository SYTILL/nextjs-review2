"use server"

import { z } from "zod";

const formSchema = z.object({
    email: z.string().email().includes("@zod.com",{message: "Only @zod.com emails are allowed"}),
    name: z.string().min(5, "Username should be at least 5 characters long."),
    password: z.string().min(10, "Password should be at least 10 characters long.")
        .regex(new RegExp(/\d/),"Password should contain at least one number (0123456789)"),
})

interface stateType {
    success: boolean,
    error?: any
}

export const handleForm = async (state: stateType, formData: FormData) => {
    const data = {
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
    };

    const result = formSchema.safeParse(data);



    if(!result.success){
        console.log(result.error.flatten());

        return {
            success: false,
            error: result.error.flatten(),
        };
    }

    if (formData.get("password") == "12345"){
        return {
            success: true
        };
    }
    return {
        success: false
    };
}