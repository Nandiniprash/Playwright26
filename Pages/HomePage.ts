import { type Page, type Locator } from "@playwright/test";


export class HomePage{
    org: Locator
    contact: Locator
    leads: Locator
    product: Locator
    more: Locator
    campaign: Locator
    profile: Locator
    signOut: Locator
    page: Page

    constructor(page:Page){
       this.page=page
       this.org= page.getByText("Organizations").first()
       this.contact= page.getByText("Contacts")
       this.leads= page.getByText("Leads")
       this.product= page.getByText("Products")
       this.more= page.getByText("More")
       this.campaign= page.getByRole('link', { name: 'Campaigns' })
       this.profile= page.locator('//img[@src="themes/softed/images/user.PNG"]')
       this.signOut= page.getByText("Sign Out")

    }

    async clickOrganization(){
        await this.org.click()
    }

    async clickContact(){
        await this.contact.click()
    }

    async clickLeads(){
        await this.leads.click()
    }

    async clickProduct(){
        await this.product.click()
    }

    async hoverMore(){
        await this.more.hover()
    }

    async clickCampaign(){
        await this.campaign.click()
    }

    async clickLogout(){
       await this.profile.hover()
       await this.signOut.click()
    }

}