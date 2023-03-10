// import { mod1Function as func1, mod2Function as func2 } from "./mod1.js";
// const testFunction = () => {
//     console.log("This is a main function!");
//     func1();
//     func2();
// }
// testFunction();
import * as mod1 from "./mod1.js"
const testFunction = () => {
    console.log("This is a test function!");
    mod1.mod1Function();
    mod1.mod2Function();
}
testFunction();