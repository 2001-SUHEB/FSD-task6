class Person{
    constructor(name,age,gender,location){
        this.name=name
        this.age=age
        this.gender=gender
        this.location=location
    }

    getDetails(){
        return `${this.name} is a ${this.age} year old ${this.gender} from ${this.location}`
    }
}

var obj = new Person("suheb",22,"male","Vellore")

console.log(obj.getDetails())