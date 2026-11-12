import {type Page, type Locator} from "@playwright/test"


export class CampaignsPage{
   page: Page
   createCamp: Locator
   campName: Locator
   saveBtn: Locator


 constructor(page:Page){
    this.page=page
    this.createCamp= page.getByTitle("Create Campaign...")
    this.campName= page.locator('[name="campaignname"]')
    this.saveBtn= page.locator('//input[@title="Save [Alt+S]"]').first()

 }

 async createCampaign(campName:string){
   await this.createCamp.click()
   await this.campName.fill(campName)
   await this.saveBtn.click()

 }

}