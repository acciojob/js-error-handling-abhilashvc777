//your code here
const str = document.querySelector("#input1")
const btn = document.querySelector("button")
class OutOfRangeError extends Error{
	constructor(arg){
		super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
		this.name = "OutOfRangeError"
	}
}
class InvalidExprError extends Error{
	constructor(){
		super("Expression should not have an invalid combination of expression");
		this.name = "InvalidExprError"
	}
}
let expression;
btn.addEventListener("click",evalString)
function evalString(){
	 expression = str.value.toString()
	try{
		if(/^[+/*]/.test(expression)){
			throw new SyntaxError("Expression should not start with invalid operator")
		}

		if (/[+/*-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with invalid operator")
    }
		 if (/[+/*-]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }
		if (/[^0-9+/*-\s]/.test(expression)) {
      throw new OutOfRangeError(expression.match(/[^0-9+/*-\s]/g).join(", "));
    }
	}catch (error){
	console.error(error.name, error.message)
}
} 