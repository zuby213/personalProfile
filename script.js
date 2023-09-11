// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const currentUTCTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}

// Call the update functions initially and then every second
updateDayOfTheWeek();
updateUTCTime();
setInterval(updateUTCTime, 1000);

// Optional: For testing purposes, add data-testid attributes
document.querySelector('h1[data-testid="slackUserName"]').textContent = "Onwuasoanya Nzube";
