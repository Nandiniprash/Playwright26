import {test} from "@playwright/test"

test("t1",()=>{
    console.log("Test1 executed");
    
})

test.fail("t2",()=>{
    console.log("Test2 executed");
    
})

test.skip("t3",()=>{
    console.log("Test3 executed");
    
})