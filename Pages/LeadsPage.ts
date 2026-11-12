import { type Page, type Locator } from "@playwright/test";


export class LeadsPage{
    page: Page
    crtLeads: Locator
    title: Locator
    fName: Locator
    lName: Locator
    company: Locator
    saveBtn: Locator

    constructor(page:Page){
        this.page=page
        this.crtLeads= page.getByTitle("Create Lead...")
        this.title= page.locator('[name="salutationtype"]')
        this.fName= page.locator('[name="firstname"]')
        this.lName= page.locator('[name="lastname"]')
        this.company= page.locator('[name="company"]')
        this.saveBtn= page.locator('//input[@title="Save [Alt+S]"]').first()
    }

    async createLeads(title:string, fName:string, lName:string, compName:string){
        await this.crtLeads.click()
        await this.title.selectOption(title)
        await this.fName.fill(fName)
        await this.lName.fill(lName)
        await this.company.fill(compName)
        await this.saveBtn.click()
    }
}