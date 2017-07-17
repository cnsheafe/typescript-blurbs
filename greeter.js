var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // Public variables can be seen by functions and other classes
        // This is why 'greeter' can still find parameters firstName and lastName
        // Even though it hasn't been passed in explicitly
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student('Jane', 'M.', 'Doe');
console.log(greeter(user));
