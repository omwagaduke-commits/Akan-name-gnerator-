const maleNames = [
    "Kwasi",     // Sunday
    "Kwadwo",    // Monday
    "Kwabena",   // Tuesday
    "Kwaku",     // Wednesday
    "Yaw",       // Thursday
    "Kofi",      // Friday
    "Kwame"      // Saturday
];

const femaleNames = [
    "Akosua",    // Sunday
    "Adwoa",     // Monday
    "Abenaa",    // Tuesday
    "Akua",      // Wednesday
    "Yaa",       // Thursday
    "Afua",      // Friday
    "Ama"        // Saturday
];

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


// Function to calculate day of the week
function calculateDay(day, month, year) {

   function calculateDay(day, month, year) {

    let CC = Math.floor(year / 100);
    let YY = year % 100;


    let calculation =
        Math.floor(
            ((4 * CC - 2 * CC - 1) +
            Math.floor((5 * YY) / 4) +
            Math.floor((26 * (month + 1)) / 10) +
            day)
        );


    // Always return a positive number from 0 - 6
    let dayIndex = ((calculation % 7) + 7) % 7;


    return dayIndex;
}

    dayNumber = dayNumber % 7;


    // Prevent negative values
    if (dayNumber < 0) {
        dayNumber += 7;
    }


    return dayNumber;
}



// Form submission
document
.getElementById("birthdayForm")
.addEventListener("submit", function(event) {

    event.preventDefault();


    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);


    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );


    // Validate empty fields
    if (!day || !month || !year) {
        alert("Please enter your complete date of birth.");
        return;
    }


    // Validate month
    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12.");
        return;
    }


    // Validate day
    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return;
    }


    // Validate gender
    if (!gender) {
        alert("Please select your gender.");
        return;
    }


    // Validate actual date
    let dateCheck = new Date(year, month - 1, day);


    if (
        dateCheck.getDate() !== day ||
        dateCheck.getMonth() !== month - 1 ||
        dateCheck.getFullYear() !== year
    ) {
        alert("Please enter a valid date.");
        return;
    }



    let dayIndex = calculateDay(day, month, year);


    let akanName;


    if (gender.value === "male") {
        akanName = maleNames[dayIndex];
    } else {
        akanName = femaleNames[dayIndex];
    }



    let result = document.getElementById("result");


    result.style.display = "block";


    result.innerHTML = `
        <h2>🎉 Your Akan Name</h2>
        <p>
            You were born on 
            <strong>${daysOfWeek[dayIndex]}</strong>.
        </p>

        <p>
            Your traditional name is 
            <strong>${akanName}</strong>.
        </p>
    `;


    // Clear form
    document.getElementById("birthdayForm").reset();

});