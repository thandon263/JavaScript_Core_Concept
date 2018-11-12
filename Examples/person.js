class Person {

    constructor() {
        this.id = 1 + Math.LOG2E + "Logi.ciD" + Math.PI
        this.firstName = ""
        this.lastName = ""
        this.address = ""
        this.gender = ""
        this.phoneNumber = null
        this.position = ""
    }

    setName(first, last) {
        this.firstName = first
        this.lastName = last
    }

    setPosition(position) {
        this.position = position
    }

    setPhoneNumber(number) {
        this.phoneNumber = number
    }

    setAddress(address) {
        this.address = address
    }

    setGender(gender) {
        this.gender = gender
    } 

    getPosition() {
        return this.position
    }

    getPhoneNumber() {
        return this.phoneNumber
    }

    getAddress() {
        return this.address
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    walk() {
        return `${this.firstName} is Walking ... `
    }

    speak() {
        return `${this.firstName} is Speaking ... `
    }
}


module.exports = Person