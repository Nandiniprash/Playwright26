/* 
1.Test Case-1
 -> Login to vtiger application
-> Click on organizations link
-> Click on create organization lookup image
-> Enter organisation name
-> Click on save Btn
-> Verify whether the organization is created in Organization Information page
-> Logout from the application.
*/

//Modular framework
// import {expect, test} from "@playwright/test"


// test("createOrg", async({page})=>{
//     test.slow()
//     //login
//     let uName="admin"
//     let pwd="admin"
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //Organization
//     await page.getByText("Organizations").first().click()
//     await page.getByTitle("Create Organization...").click()

//     //create org
//     let orgName=`QSpiders${Math.floor(Math.random()*1000)}`
//     await page.locator('[name="accountname"]').fill(orgName)
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     //await expect(page.getByText("Organization Information").first()).toContainText(orgName)

//     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(orgName)


//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await expect(page.locator('[name="user_name"]')).toBeVisible()

//     await page.waitForTimeout(2000)


// })

//data driver framework and json file

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}


// test("createOrg", async({page})=>{
//     test.slow()
//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //Organization
//     await page.getByText("Organizations").first().click()
//     await page.getByTitle("Create Organization...").click()

//     //create org
//     let orgName=`QSpiders${Math.floor(Math.random()*1000)}`
//     await page.locator('[name="accountname"]').fill(orgName)
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     //await expect(page.getByText("Organization Information").first()).toContainText(orgName)
//     await page.waitForTimeout(2000)

//     await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(orgName)


//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await expect(page.locator('[name="user_name"]')).toBeVisible()

//     await page.waitForTimeout(2000)


// })


//data driven framework with jason and excel file

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;


// test("createOrg", async({page})=>{
//     test.slow()

//     // to read data from excel
//     let book = new Workbook()
        
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
        
//     let sheet = book.getWorksheet("Organization")
//     let orgName= sheet?.getRow(2).getCell(2).toString()
//     let org= `${orgName}${Math.floor(Math.random()*1000)}`

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //Organization
//     await page.getByText("Organizations").first().click()
//     await page.getByTitle("Create Organization...").click()

//     //create org
  

//    if(typeof org=="string"){
//     await page.locator('[name="accountname"]').fill(org)
//    }
    
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     //await expect(page.getByText("Organization Information").first()).toContainText(orgName)
//     await page.waitForTimeout(2000)

//     if(typeof org=="string"){
//         await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(org)
//     }
    

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await expect(page.locator('[name="user_name"]')).toBeVisible()

//     await page.waitForTimeout(2000)


// })


//multiple data from excel, within application loop, no logout login loop

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;


// test("createOrg", async({page})=>{
//     test.slow()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //Organization
//     await page.getByText("Organizations").first().click()

//    for(let a=2; a<=5; a++){
//       // to read data from excel
//     let book = new Workbook()
        
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
        
//     let sheet = book.getWorksheet("Organization")
//     let orgName= sheet?.getRow(a).getCell(2).toString()
//     let org= `${orgName}${Math.floor(Math.random()*1000)}`

//     await page.getByTitle("Create Organization...").click()

//     //create org
  
//    if(typeof org=="string"){
//     await page.locator('[name="accountname"]').fill(org)
//    }
    
//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()

//     //await expect(page.getByText("Organization Information").first()).toContainText(orgName)
//     await page.waitForTimeout(2000)

//     if(typeof org=="string"){
//         await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(org)
//     }
//    }
    

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await expect(page.locator('[name="user_name"]')).toBeVisible()

//     await page.waitForTimeout(2000)


// })


//? POM implementation

// import {expect, test} from "@playwright/test"
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { OrganizationPage } from "../../Pages/OrganizationPage.js";


// test("createOrg", async({page})=>{
//     test.slow()

//     //login
//     let lp= new LoginPage(page)
//     await lp.login()

//     //Organization
//     let hp= new HomePage(page)
//     await hp.clickOrganization()

//     // reading data from excel
//     for(let a=2; a<=5; a++){
//       // to read data from excel
//     let book = new Workbook()
        
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
        
//     let sheet = book.getWorksheet("Organization")
//     let orgName= sheet?.getRow(a).getCell(2).toString()
//     let org= `${orgName}${Math.floor(Math.random()*1000)}`

    
//     //create org
//     let op= new OrganizationPage(page)
//     await op.createOrganization(org)

//     //await expect(page.getByText("Organization Information").first()).toContainText(orgName)
//     await page.waitForTimeout(2000)

//     if(typeof org=="string"){
//         await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(org)
//     }
//    }
    

//     //logout
//     await hp.clickLogout()
    
//     //validation if logged out
//     await expect(page.locator('[name="user_name"]')).toBeVisible()

//     await page.waitForTimeout(2000)


// }) 


//? Utilities

// import {expect, test} from "@playwright/test"
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { OrganizationPage } from "../../Pages/OrganizationPage.js";
// import { readExcel } from "../../Utilities/excel.js";
// import { randomNumber, randomEmail, randomUsername } from "../../Utilities/random.js";



// test("createOrg", async({page})=>{
//     test.slow()

//     //login
//     let lp= new LoginPage(page)
//     await lp.login()



//     //Organization
//     let hp= new HomePage(page)
//     await hp.clickOrganization()

//     // reading data from excel
//     for(let a=2; a<=5; a++){
//       // to read data from excel
    
    
//     let orgName= await readExcel("Organization",a,2)
//    // let org= `${orgName}${Math.floor(Math.random()*1000)}`
//    let org= `${orgName}${randomNumber(3)}`

    
//     //create org
//     let op= new OrganizationPage(page)
//     await op.createOrganization(org)

//     //await expect(page.getByText("Organization Information").first()).toContainText(orgName)
//     await page.waitForTimeout(2000)

//     if(typeof org=="string"){
//         await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(org)
//     }
//    }
    

//     //logout
//     await hp.clickLogout()
    
//     //validation if logged out
//     await expect(page.locator('[name="user_name"]')).toBeVisible()

//     await page.waitForTimeout(2000)


// }) 

//?Hooks

import {expect, test} from "../../Hooks/hooks.js"
//import { Workbook } from "exceljs"
import path from "node:path"
import pkg from 'exceljs';
const { Workbook } = pkg;
import { LoginPage } from "../../Pages/LoginPage.js";
import { HomePage } from "../../Pages/HomePage.js";
import { OrganizationPage } from "../../Pages/OrganizationPage.js";
import { readExcel } from "../../Utilities/excel.js";
import { randomNumber, randomEmail, randomUsername } from "../../Utilities/random.js";



test("createOrg", async({page})=>{
    test.slow()

    //Organization
    let hp= new HomePage(page)
    await hp.clickOrganization()

    // reading data from excel
    for(let a=2; a<=5; a++){
      // to read data from excel
    
    
    let orgName= await readExcel("Organization",a,2)
   // let org= `${orgName}${Math.floor(Math.random()*1000)}`
   let org= `${orgName}${randomNumber(3)}`

    
    //create org
    let op= new OrganizationPage(page)
    await op.createOrganization(org)

    //await expect(page.getByText("Organization Information").first()).toContainText(orgName)
    await page.waitForTimeout(2000)

    if(typeof org=="string"){
        await expect(page.locator('//span[@id="dtlview_Organization Name"]')).toHaveText(org)
    }
   }
    
    //validation if logged out
    await expect(page.locator('[name="user_name"]')).toBeVisible()

    await page.waitForTimeout(2000)

}) 