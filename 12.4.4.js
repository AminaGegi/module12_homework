function Device(swtch, power, color, name){
    this.name = name
    this.power = power
    this.swtch = swtch
    this.color = color
    this.switcher = function() {
        swtch = !swtch;
        if (swtch === false){
            console.log("Прибор выключен")
        }
        else {
            console.log("Прибор включен")
        }
    }
}

function Computer(swtch, power, color, name, processor, RAM, CPU){
    this.name = name
    this.power = power
    this.swtch = swtch
    this.color = color
    this.processor = processor
    this.RAM = RAM
    this.CPU = CPU;
}
Computer.prototype = new Device;
Computer.prototype.getProperties = function(swtch, power, color, name, processor, RAM, CPU){
    console.log(`Это компьютер ${this.name}, его мощность равна ${this.power} Вт, его цвет ${this.color}. Производитель процессора - ${this.processor}. Оперативная память - ${this.RAM} ГБ. Частота процессора - ${this.CPU} ГГц`)
}


function Kettle(swtch, power, color, name, volume, caseMaterial){
    this.name = name
    this.power = power
    this.swtch = swtch
    this.color = color
    this.volume = volume
    this.caseMaterial = caseMaterial;
}
Kettle.prototype = new Device;
Kettle.prototype.getProperties = function(swtch, power, color, name, volume, caseMaterial){
    console.log(`Это электрический чайник фирмы ${this.name}, его мощность равна ${this.power} Вт, его цвет ${this.color}. Объем чайника - ${this.volume} л. Материал корпуса - ${this.caseMaterial}.`)
}

let tefal = new Kettle (true, 2400, "белый", "Tefal", 1.7, "пластик")
let lenovo = new Computer(false, 800, "черный", "Lenovo", "AMD", 8, 2);


lenovo.getProperties()
lenovo.switcher()
lenovo.switcher()

tefal.getProperties()
tefal.switcher()
tefal.switcher()