//class基本用法
class create{
    constructor(int_name){
        this.name = int_name;
    }
    hello (){
        console.log("hj")
    }
}
const obj_1 = new create("hello")
obj_1.hello()
//this的不同