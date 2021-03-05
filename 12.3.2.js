function getObj(obj, str){

    console.log(str in obj);
}
const obj1 = {
    a:25,
    b:65
}
const obj2 = Object.create(obj1)

obj2.k = 62;

getObj(obj2, "a");