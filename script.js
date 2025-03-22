document.querySelectorAll('.mood-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const mood = event.target.getAttribute('data-mood');
        let message = "";

        if (mood === "happy") message = "Awesome!";
        if (mood === "neutral") message = "Don't overthink it!";
        if (mood === "sad") message = "Better days are coming!";

        document.getElementById('message').textContent = message;

        
        localStorage.setItem("lastMood", mood);
    });
});


window.onload = function() {
    const lastMood = localStorage.getItem("lastMood");
    if (lastMood) {
        let message = "";
        if (lastMood === "happy") message = "Last mood: happy";
        if (lastMood === "neutral") message = "Last mood: neutral";
        if (lastMood === "sad") message = "Last mood: sad";
        
        document.getElementById('message').textContent = message;
    }
};
console.log("Script.js este conectat!");