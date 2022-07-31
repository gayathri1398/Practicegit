const obj ={
    name:"gai",
    age:13,
    welcome:function() {
        console.log("my name is " + this.name)
    }
}
console.log(obj.welcome());
// obj.deg="b.tech";

// console.log(obj["deg"]);

// Object.assign(obj,{a:"anna"})
// console.log(obj);