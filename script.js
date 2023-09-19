async function calculateOurs() {
    // Replace with real API call to get user's location, sunrise, and sunset time
    const sunrise = new Date(); // Mock sunrise time
    sunrise.setHours(6, 0, 0);
    const sunset = new Date(); // Mock sunset time
    sunset.setHours(18, 0, 0);

    const daylightDuration = (sunset - sunrise) / 1000 / 60 / 60; // in hours
    const nightDuration = 24 - daylightDuration; // in hours

    const daylightOurs = daylightDuration / 12;
    const nightOurs = nightDuration / 12;

    const result = `
    <h2>Results:</h2>
    <p>Daylight Duration: ${daylightDuration.toFixed(2)} hours</p>
    <p>Night Duration: ${nightDuration.toFixed(2)} hours</p>
    <p>Daylight 'Ours': ${daylightOurs.toFixed(2)} hours</p>
    <p>Night 'Ours': ${nightOurs.toFixed(2)} hours</p>
  `;

    document.getElementById('result').innerHTML = result;
}
