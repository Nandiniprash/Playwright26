import { type Page, type Locator } from "@playwright/test";
import path from "node:path";
import { datePicker } from "../Utilities/calendar.js";

// line 320 in spec file
export class ProductPage{
        page:Page
        createPro: Locator
        proName: Locator
        glAcc: Locator
        file: Locator
        saveBtn: Locator
        //calendar
        salesStartdt: Locator
        salesEnddt: Locator
        supportStartdt: Locator
        supportExpirydt: Locator

    constructor(page:Page){
        this.page=page
        this.createPro= page.getByTitle("Create Product...")
        this.proName= page.locator('[name="productname"]')
        this.glAcc= page.locator('[name="glacct"]')
        this.file= page.locator("#my_file_element")
        this.saveBtn= page.locator('[title="Save [Alt+S]"]').first()
        //calendars
        this.salesStartdt= page.locator('#jscal_trigger_sales_start_date')
        this.salesEnddt= page.locator('#jscal_trigger_sales_end_date')
        this.supportStartdt= page.locator('#jscal_trigger_start_date')
        this.supportExpirydt= page.locator('#jscal_trigger_expiry_date') 
    }

    async createProduct(pName:string, glaccount:string, filePath:string ){
        await this.createPro.click()
        await this.proName.fill(pName)
        await this.glAcc.selectOption(glaccount)
        await this.file.setInputFiles(path.resolve(filePath))
    }

    async salesEnddtCalendar(monthYear:string, date:string){
        await this.salesEnddt.click()
        await datePicker(this.page,monthYear,date)

    }

    async supportStartdtCalendar(monthYear:string, date:string){
        await this.supportStartdt.click()
        await datePicker(this.page,monthYear,date)

    }

    async supportExpirydtCalendar(monthYear:string, date:string){
        await this.supportExpirydt.click()
        await datePicker(this.page,monthYear,date)

    }

    async salesStartdtCalendar(monthYear:string, date:string){
        await this.salesStartdt.click()
        await datePicker(this.page,monthYear,date)

    }

    async save(){
        await this.saveBtn.click()
    }
}