"use server"

export const sendEmail = async (formData: FormData)=>{
        
    const senderEmail = formData.get("senderEmail");
    const data = formData.get("message");
    return data;
}