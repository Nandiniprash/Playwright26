import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage.js"
import { HomePage } from "../Pages/HomePage.js"

test.beforeEach("login", async({page})=>{
    let lp=new LoginPage(page)
    await lp.login()

})

test.afterEach("logout", async({page})=>{
    let hp=new HomePage(page)
    await hp.clickLogout()

})

export{test,expect}