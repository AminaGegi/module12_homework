function getObj(obj){
    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {
            console.log("ключ - "+key+", значение - "+obj[key])
        }
    }
}
const obj1 = {
    a:25,
    b:65
}
const obj2 = Object.create(obj1)

obj2.k = 62;

getObj(obj2);