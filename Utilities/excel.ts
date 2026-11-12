import pkg from 'exceljs';
const { Workbook } = pkg;
import path from 'node:path';


export async function readExcel(sheetName:string, rowNum:number, cellNum:number){
        let book = new Workbook()
                
        await book.xlsx.readFile(path.resolve("testData/testscriptData.xlsx"))
                
        let sheet = book.getWorksheet(sheetName)
        let data= sheet?.getRow(rowNum).getCell(cellNum).toString()
        return data
           
}




