import {select, isCancel, outro} from "@clack/prompts";


export const getTypeOfFile = async () => {

    const response = await select({
        message: "What type of file do you want to create?",
        options: [
            {value: "js", label: "JavaScript"},
            {value: "ts", label: "TypeScript"},
        ]
    })

    if(isCancel(response)) {
        outro("Thank you for using our cli")
    }

    return response



}