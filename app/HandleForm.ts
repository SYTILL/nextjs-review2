"use server"

export const handleForm = async (state: boolean, formData: FormData) => {
    if (formData.get("password") == "12345"){
        return true;
    }
    return false;
}