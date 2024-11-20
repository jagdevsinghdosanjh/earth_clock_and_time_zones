document.addEventListener('DOMContentLoaded', () => {
    const sunlight = document.getElementById('sunlight');
    const timezonesContainer = document.querySelector('.timezones');

    // Generate 24 time zones for the clock
    for (let i = 0; i < 24; i++) {
        const timezone = document.createElement('div');
        timezone.classList.add('timezone');
        timezone.style.transform = `translateX(-50%) rotate(${i * 15}deg)`;

        const label = document.createElement('div');
        label.classList.add('timezone-label');
        label.innerText = i === 0 ? '12' : (i % 12);
        timezone.appendChild(label);

        timezonesContainer.appendChild(timezone);
    }

    // Update sunlight position based on current time
    function updateSunlight() {
        const now = new Date();
        const hours = now.getUTCHours();
        const minutes = now.getUTCMinutes();
        const seconds = now.getUTCSeconds();
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const degreesPerSecond = 360 / 86400; // 24 hours * 3600 seconds

        const sunlightAngle = totalSeconds * degreesPerSecond;
        sunlight.style.transform = `translateX(-50%) rotate(${sunlightAngle}deg)`;
    }

    // Initial update and interval for continuous updates
    updateSunlight();
    setInterval(updateSunlight, 1000);
});
