import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";



async function acceptDialog(page:Page,msg:string, dValue:string, text:string){
    page.on('dialog', async(diag)=>{
        if(diag.type()=="alert"){
            expect(diag.message()).toContain(msg)
            await diag.accept()
        }
        else if(diag.type()=="confirm"){
            expect(diag.message()).toContain(msg)
            await diag.accept()
        }
        else if(diag.type()=="prompt"){
            expect(diag.message()).toContain(msg)
            expect(diag.defaultValue()).toContain(dValue)
            await diag.accept(text)
        }
    })

}


async function dismissDialog(page:Page,msg:string, dValue:string){
    page.on('dialog', async(diag)=>{
        if(diag.type()=="alert"){
            expect(diag.message()).toContain(msg)
            await diag.dismiss()
        }
        else if(diag.type()=="confirm"){
            expect(diag.message()).toContain(msg)
            await diag.dismiss()
        }
        else if(diag.type()=="prompt"){
            expect(diag.message()).toContain(msg)
            expect(diag.defaultValue()).toContain(dValue)
            await diag.dismiss()
        }
    })

}
