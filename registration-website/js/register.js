function validateForm() {

    // Assignment statements
    var name = document.getElementById("uname").value;
    var age = document.getElementById("age").value;
    var regno = document.getElementById("regno").value;

    // typeof & undefined check
    if (typeof name === "undefined" || name === "") {
        alert("Name is required");
        return false;
    }

    // String object & string methods
    var s = new String(name);
    if (s.length < 3) {
        alert("Name must contain at least 3 characters");
        return false;
    }

    // Number object for Age
    var ageNum = new Number(age);

    // Precedence & associativity
    var minAge = 10 + 5 * 2;   // Result = 20

    if (ageNum < minAge) {
        alert("Age must be 20 or above");
        return false;
    }

    // Number object for Registration Number
    if (regno === "") {
        alert("Registration Number is required");
        return false;
    }

    var regNumObj = new Number(regno);

    // Math object
    var roundedAge = Math.round(ageNum);

    // toString() and toString(radix)
    var regString = regNumObj.toString(10);
    var regBinary = regNumObj.toString(2);

    // Confirm box
    var confirmMsg = confirm("Do you want to submit the form?");
    if (!confirmMsg) {
        return false;
    }

    // Alert output
    alert(
        "Registration Successful\n" +
        "Name: " + s.toUpperCase() + "\n" +
        "Age: " + roundedAge + "\n" +
        "Registration No: " + regString + "\n" +
        "Binary Reg No: " + regBinary
    );

    return true;
}
