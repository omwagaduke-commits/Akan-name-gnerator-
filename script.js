// Akan names
const maleNames = [
    "Kwasi",   // Sunday
    "Kwadwo",  // Monday
    "Kwabena", // Tuesday
    "Kwaku",   // Wednesday
    "Yaw",     // Thursday
    "Kofi",    // Friday
    "Kwame"    // Saturday
];

const femaleNames = [
    "Akosua", // Sunday
    "Adwoa",  // Monday
    "Abenaa", // Tuesday
    "Akua",   // Wednesday
    "Yaa",    // Thursday
    "Afua",   // Friday
    "Ama"     // Saturday
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

// Calculate the day of the week
function calculateDay(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date.getDay(); // 0 = Sunday, 6 = Saturday
}

// Form submission
document.getElementById("birthdayForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const gender = document.querySelector('input[name="gender"]:checked');

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
    const date = new Date(year, month - 1, day);

    if (
        date.getDate() !== day ||
        date.getMonth() !== month - 1 ||
        date.getFullYear() !== year
    ) {
        alert("Please enter a valid date.");
        return;
    }

    const dayIndex = calculateDay(day, month, year);

    const akanName =
        gender.value === "male"
            ? maleNames[dayIndex]
            : femaleNames[dayIndex];

    document.getElementById("result").innerHTML = `
        <h2>🎉 Your Akan Name</h2>
        <p>You were born on <strong>${daysOfWeek[dayIndex]}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
});