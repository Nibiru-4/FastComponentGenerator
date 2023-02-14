import {isCancel, outro, select} from "@clack/prompts";


export const getFramework = async () => {
    const response = await select({
        message: "What framework do you want to use?",
        options: [
            {value: "React", label: "React"},
        ]
    })

    if(isCancel(response)) {
        outro("Thank you for using our cli")
    }
}