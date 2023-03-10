
({mod1Function, mod2Function} = require("./mod1"))

const testFunction = () => {
console.log("I am the main function!");
mod1Function();
mod2Function();
}

testFunction();
