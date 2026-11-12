//? Commondata.json
// import data from "../testData/commonData.json" with {type:"json"}
// import { type Page, type Locator } from "@playwright/test"



// export class LoginPage{
//     userName:Locator;
//     password:Locator;
//     logBtn:Locator;
//     page:Page;

//     constructor(page:Page){
//         this.page=page
//         this.userName=page.locator('[name="user_name"]')
//         this.password=page.locator('[name="user_password"]')
//         this.logBtn=page.locator("#submitButton")

//     }

//      async login(){
//         await this.page.goto(data.url)
//         await this.userName.fill(data.userName)
//         await this.password.fill(data.password)
//         await this.logBtn.click()

//      }

// }

//? dotenv data
import { type Page, type Locator } from "@playwright/test"
import dotenv from "dotenv"

//load env file
dotenv.config({path:`testData/.env.qa`})

export class LoginPage{
    userName:Locator;
    password:Locator;
    logBtn:Locator;
    page:Page;

    constructor(page:Page){
        this.page=page
        this.userName=page.locator('[name="user_name"]')
        this.password=page.locator('[name="user_password"]')
        this.logBtn=page.locator("#submitButton")

    }

     async login(){
        await this.page.goto(process.env.url as string)
        await this.userName.fill(process.env.uName as string)
        await this.password.fill(process.env.pWord as string)
        await this.logBtn.click()

     }

}