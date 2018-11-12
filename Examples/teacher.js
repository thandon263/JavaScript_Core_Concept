const Person = require("./person")

class Teacher extends Person {

    constructor() {
        super()
        this.course = ""
        this.isGraduate = false
    }

    setCourseName(value) {
        this.course = value
    }

    getCourseName() {
        return this.course
    }

    setGraduateStatus(value) {
        this.isGraduate = value
    }
}

// Polymorphism ... "Having many forms."

Person.prototype.walk = function() {
    return `Well, ${this.firstName} is walking ...`   
}

let reg = new Teacher()
reg.setName("Reginald", "Moyo")

console.log(reg.walk())