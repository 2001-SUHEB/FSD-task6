 


class Uber {
    static pricePerMile = 2.5; //surgeprice
    static baseFare=50

    constructor(name, distance) {
        this.name = name;
        this.distance = distance;
    }

    getPrice() {
        return `Hi ${this.name}, your fare amount is ${Uber.baseFare+(this.distance * Uber.pricePerMile)}`;
    }
}

var customer = new Uber("Suheb", 34);
console.log(customer.getPrice());
