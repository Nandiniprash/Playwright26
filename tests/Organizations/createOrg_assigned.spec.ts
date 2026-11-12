/*
6. Test Case-6
-> Login to vtiger application
-> Click on organizations link
-> Click on create organization lookup image
-> Enter organisation name
-> validate whether  AssignedTo : User is checked or not
-> Give Expected Close Date to : Nov 16 2029
-> Select Expected Response  : Excellent from dropdown
-> Select industry from industry dropdown
-> Select type from type dropdown
-> Click on save Btn
->Verify whether the organization is created in Organization Information page and Logout from the application. 
*/

// import {expect, test} from "@playwright/test"


// test("createOrg_assigned", async({page})=>{
    
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

//     //create Org
//     let orgName=`QSpiders${Math.floor(Math.random()*1000)}`
//     await page.locator('[name="accountname"]').fill(orgName)

//     await expect(page.locator('//input[@value="U"]')).toBeChecked()


//     //logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.getByText("Sign Out").click()

// }
// )