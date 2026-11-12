/* how to verify whether file uploaded, logout 
3.  Test Case-3
-> Login to vtiger application
-> Click on products link
-> Click on create product lookup image
-> Enter product name
-> check whether Product active is checked or not
-> Choose GL-Account : 306- Internet sales
-> Check whether in Stock Information Handler is Checked with User or not.
-> Add Product Image in Product Image Information.
-> Validate whether file was uploaded or not
->click on save Btn
-> Verify whether the product is created in product Information page and Logout from the application.
*/

//?Modular framework
// import {expect, test} from "@playwright/test"
// import path from "node:path"


// test("createProduct", async({page})=>{
//     test.slow()
//     //login
//     let uName="admin"
//     let pwd="admin"
//     await page.goto("http://49.249.29.4:8888/")
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //product
//     await page.getByText("Products").click()
//     await page.getByTitle("Create Product...").click()

//     //create Product
//     let pName="Laptop"
//     await page.locator('[name="productname"]').fill(pName)

//     await expect(page.locator('[name="discontinued"]')).toBeChecked()

//     await page.locator('[name="glacct"]').selectOption({value:"306-Internet Sales"})

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()

//     await page.waitForTimeout(3000)

//     await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))


// //   how to verify uploaded file
//     await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

//     await page.locator('[title="Save [Alt+S]"]').first().click()

//     await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await page.waitForTimeout(2000)


// }
// )

//?data driver framework and json file

// import {expect, test} from "@playwright/test"
// import path from "node:path"
// import data from "../../testData/commonData.json" with {type:"json"}



// test("createProduct", async({page})=>{
//     test.slow()
//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //product
//     await page.getByText("Products").click()
//     await page.getByTitle("Create Product...").click()

//     //create Product
//     let pName="Laptop"
//     await page.locator('[name="productname"]').fill(pName)

//     await expect(page.locator('[name="discontinued"]')).toBeChecked()

//     await page.locator('[name="glacct"]').selectOption({value:"306-Internet Sales"})

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()

//     await page.waitForTimeout(3000)

//     await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))


// //   how to verify uploaded file
//     await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

//     await page.locator('[title="Save [Alt+S]"]').first().click()

//     await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await page.waitForTimeout(2000)


// }
// )

//?data driven framework with json and excel

// import {expect, test} from "@playwright/test"
// import path from "node:path"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;


// test("createProduct", async({page})=>{
//     test.slow()
//     // to read data from excel
//     let book = new Workbook()
            
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
            
//     let sheet = book.getWorksheet("Product")
//     let pName= sheet?.getRow(2).getCell(2).toString()
//     let glAcc= sheet?.getRow(2).getCell(3).toString()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //product
//     await page.getByText("Products").click()
//     await page.getByTitle("Create Product...").click()

//     //create Product
    
//     if(typeof pName=="string"){
//         await page.locator('[name="productname"]').fill(pName)
//     }
    

//     await expect(page.locator('[name="discontinued"]')).toBeChecked()

//     if(typeof glAcc=="string"){
//          await page.locator('[name="glacct"]').selectOption(glAcc)
//     }
    

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()

//     await page.waitForTimeout(3000)

//     await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))


// //   how to verify uploaded file
//     await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

//     await page.locator('[title="Save [Alt+S]"]').first().click()

//     if(typeof pName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)
//     }
    

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await page.waitForTimeout(2000)


// }
// )

//?multiple data read from excel, within application loop, no logout login loop

// import {expect, test} from "@playwright/test"
// import path from "node:path"
// import data from "../../testData/commonData.json" with {type:"json"}
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;


// test("createProduct", async({page})=>{
//     test.slow()

//     //login
//     let uName=data.userName
//     let pwd=data.password
//     await page.goto(data.url)
//     await page.locator('[name="user_name"]').fill(uName)
//     await page.locator('[name="user_password"]').fill(pwd)
//     await page.locator("#submitButton").click()

//     //product
//     await page.getByText("Products").click()

//    for(let a=2; a<=5; a++){
//       // to read data from excel
//     let book = new Workbook()
            
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
            
//     let sheet = book.getWorksheet("Product")
//     let pName= sheet?.getRow(a).getCell(2).toString()
//     let glAcc= sheet?.getRow(a).getCell(3).toString()
    
//     await page.getByTitle("Create Product...").click()

//     //create Product
    
//     if(typeof pName=="string"){
//         await page.locator('[name="productname"]').fill(pName)
//     }
    

//     await expect(page.locator('[name="discontinued"]')).toBeChecked()

//     if(typeof glAcc=="string"){
//          await page.locator('[name="glacct"]').selectOption(glAcc)
//     }
    

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()

//     await page.waitForTimeout(3000)

//     await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))


// //   how to verify uploaded file
//     await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

//     await page.locator('[title="Save [Alt+S]"]').first().click()

//     if(typeof pName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)
//     }
//    }
    

//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

//     await page.waitForTimeout(2000)


// }
// )


//? POM implementation

// import {expect, test} from "@playwright/test"
// import path from "node:path"
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { ProductPage } from "../../Pages/ProductPage.js";

// test("createProduct", async({page})=>{
//     test.slow()

//     //login
//     let lp= new LoginPage(page)
//     await lp.login()

//     //product
//     let hp= new HomePage(page)
//     await hp.clickProduct()

//     // reading data from excel
//     for(let a=2; a<=5; a++){

//     let book = new Workbook()
            
//     await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
            
//     let sheet = book.getWorksheet("Product")
//     let pName= sheet?.getRow(a).getCell(2).toString()
//     let glAcc= sheet?.getRow(a).getCell(3).toString()
    
//     //create Product
//     let pp= new ProductPage(page)
//     let filePath= "Uploads/Sunflower.jpg"

//     if(typeof pName=="string" && typeof glAcc=="string"){
//         await pp.createProduct(pName,glAcc,filePath)
//     }

//     await expect(page.locator('[name="discontinued"]')).toBeChecked()

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()

//     await page.waitForTimeout(3000)

   

//    // await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))

// //   how to verify uploaded file
//     await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

//     await pp.save()

//     if(typeof pName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)
//     }
//    }
    

//     //logout
//     await hp.clickLogout()

// }
// )


//?Utilities

// import {expect, test} from "@playwright/test"
// import path from "node:path"
// //import { Workbook } from "exceljs"
// import pkg from 'exceljs';
// const { Workbook } = pkg;
// import { LoginPage } from "../../Pages/LoginPage.js";
// import { HomePage } from "../../Pages/HomePage.js";
// import { ProductPage } from "../../Pages/ProductPage.js";
// import { readExcel } from "../../Utilities/excel.js";

// test("createProduct", async({page})=>{
//     test.slow()

//     //login
//     let lp= new LoginPage(page)
//     await lp.login()

//     //product
//     let hp= new HomePage(page)
//     await hp.clickProduct()

//     // reading data from excel
//     for(let a=2; a<=5; a++){

//     let pName= await readExcel("Product",a,2)
//     let glAcc= await readExcel("Product",a,3)
//     let month= await readExcel("Product",a,4)
//     let year= await readExcel("Product",a,5)
//     let date= await readExcel("Product",a,6)

//     let monthYear=month+", "+year
    
//     //create Product
//     let pp= new ProductPage(page)
//     let filePath= "Uploads/Sunflower.jpg"

//     if(typeof pName=="string" && typeof glAcc=="string" && typeof date=="string"){
//         await pp.createProduct(pName,glAcc,filePath)
//         await pp.salesStartdtCalendar(monthYear,date)
//         await pp.salesEnddtCalendar(monthYear, date)
//         await pp.supportStartdtCalendar(monthYear, date)
//         await pp.supportExpirydtCalendar(monthYear, date)
//     }

//     await expect(page.locator('[name="discontinued"]')).toBeChecked()

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()

//     //await page.waitForTimeout(3000)

   

//    // await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))

// //   how to verify uploaded file
//     await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

//     await pp.save()

//     if(typeof pName=="string"){
//         await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)
//     }
//    }
    

//     //logout
//     await hp.clickLogout()

// }
// )


//?Hooks

import {expect, test} from "../../Hooks/hooks.js"
import path from "node:path"
//import { Workbook } from "exceljs"
import pkg from 'exceljs';
const { Workbook } = pkg;
import { LoginPage } from "../../Pages/LoginPage.js";
import { HomePage } from "../../Pages/HomePage.js";
import { ProductPage } from "../../Pages/ProductPage.js";
import { readExcel } from "../../Utilities/excel.js";

test("createProduct", async({page})=>{
    test.slow()

    //product
    let hp= new HomePage(page)
    await hp.clickProduct()

    // reading data from excel
    for(let a=2; a<=5; a++){

    let pName= await readExcel("Product",a,2)
    let glAcc= await readExcel("Product",a,3)
    let month= await readExcel("Product",a,4)
    let year= await readExcel("Product",a,5)
    let date= await readExcel("Product",a,6)

    let monthYear=month+", "+year
    
    //create Product
    let pp= new ProductPage(page)
    let filePath= "Uploads/Sunflower.jpg"

    if(typeof pName=="string" && typeof glAcc=="string" && typeof date=="string"){
        await pp.createProduct(pName,glAcc,filePath)
        await pp.salesStartdtCalendar(monthYear,date)
        await pp.salesEnddtCalendar(monthYear, date)
        await pp.supportStartdtCalendar(monthYear, date)
        await pp.supportExpirydtCalendar(monthYear, date)
    }

    await expect(page.locator('[name="discontinued"]')).toBeChecked()

    await expect(page.locator('//input[@value="U"]')).toBeChecked()

    //await page.waitForTimeout(3000)

   

   // await page.locator("#my_file_element").setInputFiles(path.resolve("Uploads/Sunflower.jpg"))

//   how to verify uploaded file
    await expect(page.locator('//input[@value="Delete"]/..')).toContainText("Sunflower")

    await pp.save()

    if(typeof pName=="string"){
        await expect(page.locator('//span[@id="dtlview_Product Name"]')).toContainText(pName)
    }
   }

}
)

