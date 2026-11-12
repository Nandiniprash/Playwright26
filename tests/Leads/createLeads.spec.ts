/* 
4. Test Case-4
-> Login to vtiger application
-> Click on Leads link
-> Click on create lead lookup image
-> Enter FirstName along  with dropdown ,  LastName and companyName
-> Click on save Btn
-> Verify whether the Lead is created with LastName and CompanyName in Lead Information page and Logout from the application.
*/

//Modular framework

// import {expect, test} from "@playwright/test"


// test("createLeads", async({page})=>{
//     test.slow()
//     //login
//     let uName="admin"
//     let pwd="admin"
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()

//     //create leads
//     let fName="Nandini"
//     let lName="Prash"
//     let comp="QSpiders"
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     await page.locator('[name="firstname"]').fill(fName)
//     await page.locator('[name="lastname"]').fill(lName)
//     await page.locator('[name="company"]').fill(comp)

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(comp)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )

//Data driver framework

//Modular framework
// import {expect, test} from "@playwright/test"


// test("createLeads", async({page})=>{
//     test.slow()
//     //login
//     let uName="admin"
//     let pwd="admin"
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()

//     //create leads
//     let fName="Nandini"
//     let lName="Prash"
//     let comp="QSpiders"
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     await page.locator('[name="firstname"]').fill(fName)
//     await page.locator('[name="lastname"]').fill(lName)
//     await page.locator('[name="company"]').fill(comp)

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(comp)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )

//data driver framework and jason file

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}


// test("createLeads", async({page})=>{
//     test.slow()
//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()

//     //create leads
//     let fName="Nandini"
//     let lName="Prash"
//     let comp="QSpiders"
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     await page.locator('[name="firstname"]').fill(fName)
//     await page.locator('[name="lastname"]').fill(lName)
//     await page.locator('[name="company"]').fill(comp)

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(comp)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )

// data driven framework with json and excel file

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;

// test("createLeads", async({page})=>{
//     test.slow()
//     // to read data from excel
//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
    
//     let sheet = book.getWorksheet("Leads")
//     let fName= sheet?.getRow(2).getCell(2).toString()
//     let lName= sheet?.getRow(2).getCell(3).toString()
//     let company= sheet?.getRow(2).getCell(4).toString()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()

//     //create leads
    
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     await page.waitForTimeout(2000)
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof company=="string"){
//         await page.locator('[name="company"]').fill(company)
//     }

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
//     if(typeof lName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     if(typeof company=="string"){
//         await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
//     }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )

//multiple data

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;

// for(let a=2; a<=5; a++){
//     test("createLeads"+a, async({page})=>{
//     test.slow()
//     // to read data from excel
//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
    
//     let sheet = book.getWorksheet("Leads")
//     let fName= sheet?.getRow(2).getCell(2).toString()
//     let lName= sheet?.getRow(2).getCell(3).toString()
//     let company= sheet?.getRow(2).getCell(4).toString()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()

//     //create leads
    
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     await page.waitForTimeout(2000)
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof company=="string"){
//         await page.locator('[name="company"]').fill(company)
//     }

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
//     if(typeof lName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     if(typeof company=="string"){
//         await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
//     }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )
// }


//multiple data from excel, login logout loop

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;

// for(let a=2; a<=5; a++){
//     test("createLeads"+a, async({page})=>{
//     test.slow()
//     // to read data from excel
//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
    
//     let sheet = book.getWorksheet("Leads")
//     let fName= sheet?.getRow(2).getCell(2).toString()
//     let lName= sheet?.getRow(2).getCell(3).toString()
//     let company= sheet?.getRow(2).getCell(4).toString()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()
//     await page.getByTitle("Create Lead...").click()

//     //create leads
    
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     await page.waitForTimeout(2000)
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof company=="string"){
//         await page.locator('[name="company"]').fill(company)
//     }

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
//     if(typeof lName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     if(typeof company=="string"){
//         await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
//     }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )
// }


//multiple data from excel, within application loop, no logout login loop

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;

//     test("createLeads", async({page})=>{
//     test.slow()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //leads
//     await page.getByText("Leads").click()

//    for(let a=2; a<=5; a++){
//       // to read data from excel
//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
    
//     let sheet = book.getWorksheet("Leads")
//     let fName= sheet?.getRow(a).getCell(2).toString()
//     let lName= sheet?.getRow(a).getCell(3).toString()
//     let company= sheet?.getRow(a).getCell(4).toString()

    
//     await page.getByTitle("Create Lead...").click()

//     //create leads
    
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     await page.waitForTimeout(2000)
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof company=="string"){
//         await page.locator('[name="company"]').fill(company)
//     }

//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
//     if(typeof lName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     if(typeof company=="string"){
//         await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
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
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { LeadsPage } from "../../Pages/LeadsPage.js";

//     test("createLeads", async({page})=>{
//     test.slow()

//     //login

//     let lp= new LoginPage(page)
//     await lp.login()

//     //leads
//     let hp=new HomePage(page)
//     await hp.clickLeads()

//     //reading data from excel
//    for(let a=2; a<=5; a++){

//     let book = new Workbook()
    
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
    
//     let sheet = book.getWorksheet("Leads")
//     let title = sheet?.getRow(a).getCell(2).toString()
//     let fName= sheet?.getRow(a).getCell(3).toString()
//     let lName= sheet?.getRow(a).getCell(4).toString()
//     let company= sheet?.getRow(a).getCell(5).toString()

//     //create Leads
//     let ldp= new LeadsPage(page)
//     if(typeof title=="string" && typeof fName=="string" && typeof lName=="string" && typeof company=="string"){
//     await ldp.createLeads(title, fName, lName, company)
//    }
   
//    //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
//     if(typeof lName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     if(typeof company=="string"){
//         await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
//     }
//    }

//     //logout
//     await hp.clickLogout()

// }
// )

//?Utilities

// import {expect, test} from "@playwright/test"
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { LeadsPage } from "../../Pages/LeadsPage.js";
// import { readExcel } from "../../Utilities/excel.js";

//     test("createLeads", async({page})=>{
//     test.slow()

//     //login

//     let lp= new LoginPage(page)
//     await lp.login()

//     //leads
//     let hp=new HomePage(page)
//     await hp.clickLeads()

//     //reading data from excel
//     for(let a=2; a<=5; a++){

//     let title = await readExcel("Leads",a,2)
//     let fName= await readExcel("Leads",a,3)
//     let lName= await readExcel("Leads",a,4)
//     let company= await readExcel("Leads",a,5)

//     //create Leads
//     let ldp= new LeadsPage(page)
//     if(typeof title=="string" && typeof fName=="string" && typeof lName=="string" && typeof company=="string"){
//     await ldp.createLeads(title, fName, lName, company)
//    }
   
//    //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
//     if(typeof lName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     if(typeof company=="string"){
//         await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
//     }
//    }

//     //logout
//     await hp.clickLogout()

// }
// )

//?Hooks

import {expect, test} from "../../Hooks/hooks.js"
//import { Workbook } from "exceljs"
import path from "node:path"
import pkg from 'exceljs';
const { Workbook } = pkg;
import { LoginPage } from "../../Pages/LoginPage.js";
import { HomePage } from "../../Pages/HomePage.js";
import { LeadsPage } from "../../Pages/LeadsPage.js";
import { readExcel } from "../../Utilities/excel.js";

    test("createLeads", async({page})=>{
    test.slow()

    //leads
    let hp=new HomePage(page)
    await hp.clickLeads()

    //reading data from excel
    for(let a=2; a<=5; a++){

    let title = await readExcel("Leads",a,2)
    let fName= await readExcel("Leads",a,3)
    let lName= await readExcel("Leads",a,4)
    let company= await readExcel("Leads",a,5)

    //create Leads
    let ldp= new LeadsPage(page)
    if(typeof title=="string" && typeof fName=="string" && typeof lName=="string" && typeof company=="string"){
    await ldp.createLeads(title, fName, lName, company)
   }
   
   //validation
    if(typeof fName=="string"){
        await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
    }
    if(typeof lName=="string"){
        await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
    }
    if(typeof company=="string"){
        await expect(page.locator('//span[@id="dtlview_Company"]')).toHaveText(company)
    }
   }

}
)




