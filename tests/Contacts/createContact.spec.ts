/* 
2. Test Case-2
-> Login to vtiger application
-> Click on Contacts link
-> Click on create contact lookup image
-> Enter FirstName with title dropdown and LastName
-> Select Lead Source to Employee
-> Choose Support End date as  October 30 2029
-> Click on save Btn
-> Verify whether the Contact is created with firstName and LastName in Contact Information page and Logout from the application.
*/

//Modular framework

// import {expect, test} from "@playwright/test"


// test("createContacts", async({page})=>{
//     test.slow()
//     //login
//     let uName="admin"
//     let pwd="admin"
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //contacts
//     await page.getByText("Contacts").click()
//     await page.getByTitle("Create Contact...").click()

//     //create contacts
//     let fName="Nandini"
//     let lName="Prash"
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//    //await page.locator('[name="salutationtype"]').selectOption("Mrs.")
//     await page.locator('[name="firstname"]').fill(fName)
//     await page.locator('[name="lastname"]').fill(lName)
//     await page.locator('[name="leadsource"]').selectOption({value:"Employee"})

//     //calendar
//     await page.locator("#jscal_trigger_support_end_date").click()

//     let monthYear="October, 2029"
//     let date=30

//     while(true){

//        let text= await page.locator('//td[@class="title"]').last().textContent()
//        console.log(text);

//        if(text==monthYear){
//          await page.getByText(`${date}`).click()
//         break;
//        }
//        else{
//         await page.getByText("›").click()
//        }

//     }


//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
//     await page.waitForTimeout(3000)

//     //validation
//     await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click() 

// }
// )


// Data driver framework with json

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}



// test("createContacts", async({page})=>{
//     test.slow()
//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //contacts
//     await page.getByText("Contacts").click()
//     await page.getByTitle("Create Contact...").click()

//     //create contacts
//     let fName="Nandini"
//     let lName="Prash"
//     await page.locator('[name="salutationtype"]').selectOption({value:"Mrs."})
//    //await page.locator('[name="salutationtype"]').selectOption("Mrs.")
//     await page.locator('[name="firstname"]').fill(fName)
//     await page.locator('[name="lastname"]').fill(lName)
//     await page.locator('[name="leadsource"]').selectOption({value:"Employee"})

//     //calendar
//     await page.locator("#jscal_trigger_support_end_date").click()

//     let monthYear="October, 2029"
//     let date=30

//     while(true){

//        let text= await page.locator('//td[@class="title"]').last().textContent()
//        console.log(text);

//        if(text==monthYear){
//          await page.getByText(`${date}`).click()
//         break;
//        }
//        else{
//         await page.getByText("›").click()
//        }

//     }


//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
//     await page.waitForTimeout(3000)

//     //validation
//     await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click() 

// }
// )

//data driver with json and excel

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;



// test("createContacts", async({page})=>{
//     test.slow()

//     // to read data from excel
//     let book = new Workbook()

//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Contacts")
//     let title= sheet?.getRow(2).getCell(2).toString()
//     let fName= sheet?.getRow(2).getCell(3).toString()
//     let lName= sheet?.getRow(2).getCell(4).toString()
//     let leadSource= sheet?.getRow(2).getCell(5).toString()
//     let month= sheet?.getRow(2).getCell(6).toString()
//     let year= sheet?.getRow(2).getCell(7).toString()
//     let date= sheet?.getRow(2).getCell(8).toString()

//     let monthYear=month+", "+year


//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //contacts
//     await page.getByText("Contacts").click()
//     await page.getByTitle("Create Contact...").click()

//     //create contacts
//     if(typeof title=="string"){
//         await page.locator('[name="salutationtype"]').selectOption(title)
//     }
//    //await page.locator('[name="salutationtype"]').selectOption("Mrs.")
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof leadSource=="string"){
//         await page.locator('[name="leadsource"]').selectOption(leadSource)
//     }

//     //calendar
//     await page.locator("#jscal_trigger_support_end_date").click()

    

//     while(true){

//        let text= await page.locator('//td[@class="title"]').last().textContent()
//        console.log(text);

//        if(text==monthYear){
//          await page.getByText(`${date}`).click()
//         break;
//        }
//        else{
//         await page.getByText("›").click()
//        }

//     }


//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
//     await page.waitForTimeout(3000)

//     //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
    
//     if(typeof lName=="string"){
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click() 

// }
// )

// multiple excel data loop- 1st method login and logout

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;


// for(let a=2; a<=5; a++){
//     test("createContacts"+a, async({page})=>{
//     test.slow()

//     // to read data from excel
//     let book = new Workbook()

//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Contacts")
//     let title= sheet?.getRow(a).getCell(2).toString()
//     let fName= sheet?.getRow(a).getCell(3).toString()
//     let lName= sheet?.getRow(a).getCell(4).toString()
//     let leadSource= sheet?.getRow(a).getCell(5).toString()
//     let month= sheet?.getRow(a).getCell(6).toString()
//     let year= sheet?.getRow(a).getCell(7).toString()
//     let date= sheet?.getRow(a).getCell(8).toString()

//     let monthYear=month+", "+year


//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //contacts
//     await page.getByText("Contacts").click()
//     await page.getByTitle("Create Contact...").click()

//     //create contacts
//     if(typeof title=="string"){
//         await page.locator('[name="salutationtype"]').selectOption(title)
//     }
//    //await page.locator('[name="salutationtype"]').selectOption("Mrs.")
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof leadSource=="string"){
//         await page.locator('[name="leadsource"]').selectOption(leadSource)
//     }

//     //calendar
//     await page.locator("#jscal_trigger_support_end_date").click()

    

//     while(true){

//        let text= await page.locator('//td[@class="title"]').last().textContent()
//        console.log(text);

//        if(text==monthYear){
//          await page.locator(`//td[text()=${date}]`).click()
//         break;
//        }
//        else{
//         await page.getByText("›").click()
//        }

//     }


//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
//     await page.waitForTimeout(3000)

//     //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
    
//     if(typeof lName=="string"){
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click() 

// }
// )
// }



// multiple data loop - within application

// import {expect, test} from "@playwright/test"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import pkg from 'exceljs';
// const { Workbook } = pkg;



//     test("createContacts", async({page})=>{
//     test.slow()


//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //contacts
//     await page.getByText("Contacts").click()


//     for(let a=2; a<=5; a++){
//         // to read data from excel
//     let book = new Workbook()

//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Contacts")
//     let title= sheet?.getRow(a).getCell(2).toString()
//     let fName= sheet?.getRow(a).getCell(3).toString()
//     let lName= sheet?.getRow(a).getCell(4).toString()
//     let leadSource= sheet?.getRow(a).getCell(5).toString()
//     let month= sheet?.getRow(a).getCell(6).toString()
//     let year= sheet?.getRow(a).getCell(7).toString()
//     let date= sheet?.getRow(a).getCell(8).toString()

//     let monthYear=month+", "+year
//     await page.getByTitle("Create Contact...").click()

//     //create contacts
//     if(typeof title=="string"){
//         await page.locator('[name="salutationtype"]').selectOption(title)
//     }
//    //await page.locator('[name="salutationtype"]').selectOption("Mrs.")
//     if(typeof fName=="string"){
//         await page.locator('[name="firstname"]').fill(fName)
//     }
//     if(typeof lName=="string"){
//         await page.locator('[name="lastname"]').fill(lName)
//     }
//     if(typeof leadSource=="string"){
//         await page.locator('[name="leadsource"]').selectOption(leadSource)
//     }

//     //calendar
//     await page.locator("#jscal_trigger_support_end_date").click()

    

//     while(true){

//        let text= await page.locator('//td[@class="title"]').last().textContent()
//        console.log(text);

//        if(text==monthYear){
//          await page.locator(`//td[text()=${date}]`).click()
//         break;
//        }
//        else{
//         await page.getByText("›").click()
//        }

//     }


//     await page.locator('//input[@title="Save [Alt+S]"]').first().click()
//     await page.waitForTimeout(3000)

//     //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
    
//     if(typeof lName=="string"){
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     }



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
// import { ContactPage } from "../../Pages/ContactPage.js";


//     test("createContacts", async({page})=>{
//     test.slow()


//     //login
//     let lp=new LoginPage(page)
//     await lp.login()

//     //contacts
//     let hp= new HomePage(page)
//     await hp.clickContact()

//     for(let a=2; a<=5; a++){
//         // to read data from excel
//     let book = new Workbook()

//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))

//     let sheet = book.getWorksheet("Contacts")
//     let title= sheet?.getRow(a).getCell(2).toString()
//     let fName= sheet?.getRow(a).getCell(3).toString()
//     let lName= sheet?.getRow(a).getCell(4).toString()
//     let leadSource= sheet?.getRow(a).getCell(5).toString()
//     let month= sheet?.getRow(a).getCell(6).toString()
//     let year= sheet?.getRow(a).getCell(7).toString()
//     let date= sheet?.getRow(a).getCell(8).toString()

//     let monthYear=month+", "+year

//     //create contacts

//     let cc= new ContactPage(page)
    

//     if(typeof title=="string" && typeof fName=="string" && typeof lName=="string" && typeof leadSource=="string" && typeof date=="string"){
//         await cc.createContact(title,fName,lName,leadSource)
//         await cc.clickCalendar(monthYear,date)
//     }


//     await cc.saveButton()
//     await page.waitForTimeout(3000)

//     //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
    
//     if(typeof lName=="string"){
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     }

//     //logout
//     await hp.clickLogout()

// }
// )

//?Utilities

// import {expect, test} from "@playwright/test"
// //import { Workbook } from "exceljs"
// import path from "node:path"
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { ContactPage } from "../../Pages/ContactPage.js";
// import { readExcel } from "../../Utilities/excel.js";


//     test("createContacts", async({page})=>{
//     test.slow()


//     //login
//     let lp=new LoginPage(page)
//     await lp.login()

//     //contacts
//     let hp= new HomePage(page)
//     await hp.clickContact()

//     for(let a=2; a<=5; a++){
//         // to read data from excel
    
//     let title= await readExcel("Contacts",a,2)
//     let fName= await readExcel("Contacts",a,3)
//     let lName= await readExcel("Contacts",a,4)
//     let leadSource= await readExcel("Contacts",a,5)
//     let month= await readExcel("Contacts",a,6)
//     let year= await readExcel("Contacts",a,7)
//     let date= await readExcel("Contacts",a,8)

//     let monthYear=month+", "+year

//     //create contacts

//     let cc= new ContactPage(page)
    

//     if(typeof title=="string" && typeof fName=="string" && typeof lName=="string" && typeof leadSource=="string" && typeof date=="string"){
//         await cc.createContact(title,fName,lName,leadSource)
//         await cc.clickCalendarIcon(monthYear,date)
//     }


//     await cc.saveButton()
//     await page.waitForTimeout(3000)

//     //validation
//     if(typeof fName=="string"){
//         await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
//     }
    
//     if(typeof lName=="string"){
//     await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
//     }
//     }

//     //logout
//     await hp.clickLogout()

// }
// )

//?Hooks

import {expect, test} from "../../Hooks/hooks.js"
//import { Workbook } from "exceljs"
import path from "node:path"
import { LoginPage } from "../../Pages/LoginPage.js";
import { HomePage } from "../../Pages/HomePage.js";
import { ContactPage } from "../../Pages/ContactPage.js";
import { readExcel } from "../../Utilities/excel.js";


    test("createContacts", async({page})=>{
    test.slow()

    //contacts
    let hp= new HomePage(page)
    await hp.clickContact()

    for(let a=2; a<=5; a++){
        // to read data from excel
    
    let title= await readExcel("Contacts",a,2)
    let fName= await readExcel("Contacts",a,3)
    let lName= await readExcel("Contacts",a,4)
    let leadSource= await readExcel("Contacts",a,5)
    let month= await readExcel("Contacts",a,6)
    let year= await readExcel("Contacts",a,7)
    let date= await readExcel("Contacts",a,8)

    let monthYear=month+", "+year

    //create contacts

    let cc= new ContactPage(page)
    

    if(typeof title=="string" && typeof fName=="string" && typeof lName=="string" && typeof leadSource=="string" && typeof date=="string"){
        await cc.createContact(title,fName,lName,leadSource)
        await cc.clickCalendarIcon(monthYear,date)
    }


    await cc.saveButton()
    await page.waitForTimeout(3000)

    //validation
    if(typeof fName=="string"){
        await expect(page.locator('//span[@id="dtlview_First Name"]')).toHaveText(fName)
    }
    
    if(typeof lName=="string"){
    await expect(page.locator('//span[@id="dtlview_Last Name"]')).toHaveText(lName)
    }
    }

}
)