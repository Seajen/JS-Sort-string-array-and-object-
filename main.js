
const txt = "apple lemon orange";
const arr = ["bananas", "avocado", "blackberries"];
const obj = { name: "cherries grapes mango" };


function printFruits() {
    if (this.constructor.name === "String") {
        const list = this.split(" ");
        list.forEach(item => document.write(`Fruit name: ${item} <br>`));
        document.write("<hr>")
    }
    if (this.constructor.name === "Array") {
        this.forEach(item => document.write(`Fruit name: ${item} <br>`));
        document.write("<hr>");
    }
    if (this.constructor.name === "Object") {
        this.name.split(" ").forEach(item => document.write(`Fruit name: ${item} <br>`));
        document.write("<hr>")
    }
}

 printFruits.call(txt);
 printFruits.call(arr);
 printFruits.call(obj);

//_________________________________________________________________________________________________________


 const num = [3,2,5,6,33];

 //найти сумум чисел масива

function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
arraySum(num);



















