/* 
-> Login to vtiger application
-> mouseHoverOn more Link
-> Click on campaigns
-> Click on create campaign lookup image
-> Enter campaignName
-> Click on save Btn
-> Verify whether the campaign is created in campaign Information page and Logout from the application.
*/

//Modular framework
// import {expect, test} from "@playwright/test"


// test("campaigns", async({page})=>{
//     test.slow()
//     let uName="admin"
//     let pwd="admin"
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     await page.getByText("More").hover()

//     await page.getByRole('link', { name: 'Campaigns' }).click()

//     //create campaign
//     await page.getByTitle("Create Campaign...").click()
//     let cName="Campaign1"
//     await page.locator('[name="campaignname"]').fill(cName)
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    
//     await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()


// }
// )

//data driver framework n jason file

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}


// test("campaigns", async({page})=>{
//     test.slow()
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     await page.getByText("More").hover()
//     await page.waitForTimeout(2000)

//     await page.getByRole('link', { name: 'Campaigns' }).click()

//     //create campaign
//     await page.getByTitle("Create Campaign...").click()
//     let cName="Campaign1"
//     await page.locator('[name="campaignname"]').fill(cName)
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    
//     await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()


// }
// )

// data driven framework with jason and excel


// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import path from "node:path"


// test("campaigns", async({page})=>{
//     test.slow()

//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Campaign")
//     let cName= sheet?.getRow(2).getCell(2).toString()
    

//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     await page.getByText("More").hover()
//     await page.waitForTimeout(4000)

//     await page.getByRole('link', { name: 'Campaigns' }).click()

//     //create campaign
//     await page.getByTitle("Create Campaign...").click()
    
//     if(typeof cName=="string"){
//         await page.locator('[name="campaignname"]').fill(cName)
//     }
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    
//     if(typeof cName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)
//     }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()


// }
// )


//multiple data read from excel- within application, no logout and login


// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import path from "node:path"


// test("campaigns", async({page})=>{
//     test.slow()
    

//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     await page.getByText("More").hover()
//     await page.waitForTimeout(4000)

//     await page.getByRole('link', { name: 'Campaigns' }).click()



//    for(let a=2; a<=5; a++){

//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Campaign")
//     let cName= sheet?.getRow(a).getCell(2).toString()

//      //create campaign
//     await page.getByTitle("Create Campaign...").click()
    
//     if(typeof cName=="string"){
//         await page.locator('[name="campaignname"]').fill(cName)
//     }
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
    
//     if(typeof cName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)
//     }
//    }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()


// }
// )

//?POM implementation

// import {expect, test} from "@playwright/test"
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import path from "node:path"
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { CampaignsPage } from "../../Pages/CampaignsPage.js";


// test("campaigns", async({page})=>{
//     test.slow()

//     //creating an object for login class
//     let lp = new LoginPage(page)
//     await lp.login()

//     let hp = new HomePage(page)
//     await hp.hoverMore()

//     await page.waitForTimeout(4000)

//     await hp.clickCampaign()


//    for(let a=2; a<=5; a++){

//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Campaign")
//     let cName= sheet?.getRow(a).getCell(2).toString()

//      //create campaign
//      let cp= new CampaignsPage(page)
    
//     if(typeof cName=="string"){
//         await cp.createCampaign(cName)
//     }
    
//     if(typeof cName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)
//     }
//    }

//     //logout
//     await hp.clickLogout()

// }
// )

//?utilities

// import {expect, test} from "@playwright/test"
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import path from "node:path"
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { CampaignsPage } from "../../Pages/CampaignsPage.js";
// import { readExcel } from "../../Utilities/excel.js";


// test("campaigns", async({page})=>{
//     test.slow()

//     //creating an object for login class
//     let lp = new LoginPage(page)
//     await lp.login()

//     let hp = new HomePage(page)
//     await hp.hoverMore()

//     await page.waitForTimeout(4000)

//     await hp.clickCampaign()


//    for(let a=2; a<=5; a++){

    
//     let cName= await readExcel("Campaign",a,2)

//      //create campaign
//      let cp= new CampaignsPage(page)
    
//     if(typeof cName=="string"){
//         await cp.createCampaign(cName)
//     }
    
//     if(typeof cName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)
//     }
//    }

//     //logout
//     await hp.clickLogout()

// }
// )


//?Hooks

import {expect, test} from "../../Hooks/hooks.js"
//import { Workbook } from "exceljs"
import pkg from 'exceljs';
const { Workbook } = pkg;
import path from "node:path"
import { LoginPage } from "../../Pages/LoginPage.js";
import { HomePage } from "../../Pages/HomePage.js";
import { CampaignsPage } from "../../Pages/CampaignsPage.js";
import { readExcel } from "../../Utilities/excel.js";


test("campaigns", async({page})=>{
    test.slow()

    let hp = new HomePage(page)
    await hp.hoverMore()

    await page.waitForTimeout(4000)

    await hp.clickCampaign()


   for(let a=2; a<=5; a++){

    
    let cName= await readExcel("Campaign",a,2)

     //create campaign
     let cp= new CampaignsPage(page)
    
    if(typeof cName=="string"){
        await cp.createCampaign(cName)
    }
    
    if(typeof cName=="string"){
        await expect(page.locator('//span[@id="dtlview_Campaign Name"]')).toHaveText(cName)
    }
   }

}
)