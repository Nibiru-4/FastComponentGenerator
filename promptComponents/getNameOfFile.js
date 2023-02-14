import { isCancel, outro, text} from "@clack/prompts";


export const getNameOfFile = async () => {
    const response = await text({
        message : "What is your file name?",
        placeholder : "component.js",
        validate:(value) =>{
            if(value === ""){
                return "Please enter a valid name"
            }
        }
    })

    if(isCancel(response)){
        return outro("Thank you for using our cli")
    }

    return response
}