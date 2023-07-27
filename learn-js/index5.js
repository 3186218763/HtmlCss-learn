function create(int_name){
    this.name = int_name;

}

let ob_1 = new create("雄安")
console.log(ob_1)

//3种宣告function的方法

//法一
function fun_name(){}

//法二
let fun_name = function(){}

//法三
let fun_name = () => {}