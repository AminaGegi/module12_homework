class Device{
    constructor (swtch, power, color, name){
        this.name = name;
        this.power = power;
        this.swtch = swtch;
        this.color = color;
    }
    switcher(){
        this.swtch = !this.swtch;
        if (this.swtch === false){
            console.log("Вы выключили прибор " + this.name)
        }
        else {
            console.log("Вы включили прибор " + this.name)
        }
    }
}


class Computer extends Device{
    constructor(swtch, power, color, name, processor, RAM, CPU){
        super(swtch, power, color, name);
        this.name = name;
        this.power = power;
        this.swtch = swtch;
        this.color = color;
        this.processor = processor;
        this.RAM = RAM;
        this.CPU = CPU;
    }
    getProperties(){
        console.log(`Это компьютер ${this.name}, его мощность равна ${this.power} Вт, его цвет ${this.color}. Производитель процессора - ${this.processor}. Оперативная память - ${this.RAM} ГБ. Частота процессора - ${this.CPU} ГГц. Он ${this.swtch ? "включен":"выключен"}.`)
    }
}

class Kettle extends Device {
    constructor (swtch, power, color, name, volume, caseMaterial){
        super(swtch, power, color, name);
        this.name = name;
        this.power = power;
        this.swtch = swtch;
        this.color = color;
        this.volume = volume;
        this.caseMaterial = caseMaterial;
    }
    getProperties(){
        console.log(`Это электрический чайник фирмы ${this.name}, его мощность равна ${this.power} Вт, его цвет ${this.color}. Объем чайника - ${this.volume} л. Материал корпуса - ${this.caseMaterial}.Он ${this.swtch ? "включен":"выключен"}.`)
    }
}

const tefal = new Kettle (true, 2400, "белый", "Tefal", 1.7, "пластик")
const lenovo = new Computer(false, 800, "черный", "Lenovo", "AMD", 8, 2);


lenovo.getProperties()
lenovo.switcher()
lenovo.switcher()

tefal.getProperties()
tefal.switcher()
tefal.switcher()