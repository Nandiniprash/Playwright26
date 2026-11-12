import {type Page, type Locator} from "@playwright/test"
import { datePicker } from "../Utilities/calendar.js"



export class ContactPage{
    page: Page
    createCont: Locator
    title: Locator
    fName: Locator
    lName: Locator
    leadSource: Locator
    calendar: Locator
    monthTxt: Locator
    arrow: Locator
    saveBtn: Locator

    constructor(page:Page){
        this.page= page
        this.createCont= page.getByTitle("Create Contact...")
        this.title= page.locator('[name="salutationtype"]')
        this.fName= page.locator('[name="firstname"]')
        this.lName= page.locator('[name="lastname"]')
        this.leadSource= page.locator('[name="leadsource"]')
        this.calendar= page.locator("#jscal_trigger_support_end_date")
        // this.monthTxt= page.locator('//td[@class="title"]').last()
        // this.arrow= page.getByText("›")
        this.saveBtn= page.locator('//input[@title="Save [Alt+S]"]').first()

    }

    async createContact(title:string, frstName:string, lastName:string, leadsrc:string){
       await this.createCont.click()
       await this.title.selectOption(title)
       await this.fName.fill(frstName)
       await this.lName.fill(lastName)
       await this.leadSource.selectOption(leadsrc)

    }

    async clickCalendarIcon(mothYear:string,date:string){

        await this.calendar.click()
        await datePicker(this.page,mothYear,date)
        

        // while(true){
        //     let text=await this.monthTxt.textContent()
        //     if(text==monthYear){
        //          await this.page.locator(`//td[text()=${date}]`).click()
        //          break;
        //     }
        //     else{
        //          await this.arrow.click()
        //     }
        // }

    }

    async saveButton(){
        await this.saveBtn.click()
    }
}