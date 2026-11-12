import type { Page } from "@playwright/test";


export async function datePicker(page:Page, monthYear:string, date:string){

        while(true){
            let text=await page.locator('//td[@class="title"]').last().textContent()
            if(text==monthYear){
                 //await page.locator(`//td[text()=${date}]`).click()
                 await page.getByRole(`cell`, { name: date, exact: true }).click()
                 break;
            }
            else{
                // await page.getByText("›").click()
                 await page.getByRole('cell', { name: '›' }).click()
            }
        }
}


