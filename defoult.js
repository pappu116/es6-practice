function add(num1, num2 = 20){
    return num1 + num2; //^....20 is............this is defoult value 
}
const total = add(10, 1)
console.log(total);