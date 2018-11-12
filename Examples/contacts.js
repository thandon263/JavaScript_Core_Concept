const Person = require('./person')

class Phonebook {
    
    constructor() {
        this.hiring = false
        this.company = ""
        this.available = this.hiring
        this.contacts = []
    }

    set setCompany(companyName) {
        this.company = companyName
    }

    get getCompany() {
        return this.company
    }

    setHired(ishired) {
        this.hiring = ishired
    } 

    getHiring() {
        return `Job Postings Available: ${this.hiring}`
    }

    addContacts(value) {
        this.contacts.push(value)
    }

    countContacts() {
        return this.contacts.length
    }
}

let contact = new Phonebook()
let ben = new Person()
let william = new Person()
ben.setName("Benjamin", "Laruso")
ben.setAddress("248 Benedict Drive")
ben.setPosition("Software Developer")
ben.setPhoneNumber("(917) 829-9183")
ben.setGender("Male")

william.setName("William", "Erickson")
william.setAddress("41 Barthust Drive")
william.setPosition("Quality Analyst")
william.setPhoneNumber("(248) 552-224")
william.setGender("Male")

console.log(ben)

contact.addContacts(ben)
contact.addContacts(william)
contact.setCompany("SapientRazorfish")

console.log(contact.getCompany())