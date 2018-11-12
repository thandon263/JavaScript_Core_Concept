

class Person {

    constructor() {
        this.firstName = ""
        this.lastName = ""
        this.gender = ""
        this.age = null
    }

    // getters
    getName() {
        return this.firstName + " " + this.lastName
    }

    getGender() {
        return this.gender
    }

    // setters
    setName(first, last) {
        this.firstName = first
        this.lastName = last
    }

    setGender(gender) {
        this.gender = gender
    }

    setAge(value) {
        this.age = value
    }


}


class Doctor extends Person {
    // inheritance
    constructor() {
        super()
        this.id = Math.PI + "G" + Math.random()
    }
}

// Polymorphism
Person.prototype.getName = function() {
    return "Well, My name is " + this.firstName + " and Last name is " + this.lastName
}



// hospital class
class Hospital {

    constructor() {
        this.hospitalName = ""
        this.listOfRegisteredDoctors = []
    }

    setName(name) {
        this.hospitalName = name
    }

    getName() {
        return this.hospitalName
    }

    addDoctor(doctor) {
        this.listOfRegisteredDoctors.push(doctor)
    }

    countListOD() {
        return this.listOfRegisteredDoctors.length
    }
}

// instance of doctors
let jerry = new Doctor()
let lawrence = new Doctor()

// instance of hospital
let hospital = new Hospital()

jerry.setName("Jerry", "Wilson")
lawrence.setName("Lawrence", "Chan")

console.log("--------------------")
console.log(jerry.getName())
console.log("--------------------")

hospital.setName("North York General Hospital")
hospital.addDoctor(jerry)
hospital.addDoctor(lawrence)


console.log("Number of Doctors: ", hospital.countListOD())

console.log(hospital)
