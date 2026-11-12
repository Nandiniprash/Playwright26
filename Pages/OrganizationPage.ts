import { type Page, type Locator } from "@playwright/test";


export class OrganizationPage{
        page: Page
        createOrg: Locator
        orgName: Locator
        saveBtn: Locator

    constructor(page:Page){
        this.page=page
        this.createOrg= page.getByTitle("Create Organization...")
        this.orgName= page.locator('[name="accountname"]')
        this.saveBtn= page.locator('//input[@title="Save [Alt+S]"]').first()
    }

    async createOrganization(org:string){
        await this.createOrg.click()
        await this.orgName.fill(org)
        await this.saveBtn.click()
    }
}