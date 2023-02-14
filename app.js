import {intro, outro, isCancel, confirm, text} from "@clack/prompts";
import {getNameOfFile} from "./promptComponents/getNameOfFile.js";
import {getTypeOfFile} from "./promptComponents/getTypeOfFile.js";
import {getFramework} from "./promptComponents/getFramework.js";
import fs from "fs"


//starting the cli sequences
intro("Fast Component Generator")

const nameOfFile = await getNameOfFile()
const typeOfFile = await getTypeOfFile()


const fileName = `${nameOfFile}.${typeOfFile}x`

const fileContent = `import React from "react"

export const ${nameOfFile} = () => {
    return (
        <div>
            <h1>Hello ${nameOfFile}</h1>
            </div>
            
            )}
`

fs.writeFile(fileName,fileContent, (err) => {
    if(err) {
        console.log(err)
    }

    outro(`File ${nameOfFile} has been created !`)
})





