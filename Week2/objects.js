// dealing with objects to formulate methods
let farmer = {
     name: "ritah",
     age : 30,
     numChicks : 20,
    greetFarmer : function(){
        console.log(` welcome ${farmer.name} to Young4Chicks`)
    },
    chickReuest : function(){
        console.log(`${farmer.name} requested for ${farmer.numChicks} chicks`);
    },
    payChicks(){
        console.log(`${farmer.name} has paid ${farmer.age} dollars for ${farmer.numChicks} chicks`)
    }
}
farmer.greetFarmer()
farmer.chickReuest()
console.log(farmer.age);
farmer.payChicks()
// objectname.method
// objectname.function()