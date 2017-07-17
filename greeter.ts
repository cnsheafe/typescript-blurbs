class Student {
  fullName: string
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    // Public variables can be seen by functions and other classes
    // This is why 'greeter' can still find parameters firstName and lastName
    // Even though it hasn't been passed in explicitly
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}
// Interfaces describe parameter types on objects
interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

const user = new Student('Jane', 'M.', 'Doe')
console.log(greeter(user))
