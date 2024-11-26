// Timer für ein einzelnes Element starten
document.getElementById("start-timer").addEventListener("click", function() {
    const timeInput = document.getElementById("timer-input").value;
    let timeRemaining = parseInt(timeInput);
    const display = document.getElementById("timer-display");

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Bitte gib eine gültige Zeit in Sekunden ein.");
        return;
    }

    const timerInterval = setInterval(function() {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            display.textContent = "Fertig!";
            display.classList.add("fertig");
        } else {
            display.textContent = timeRemaining;
            timeRemaining--;
        }
    }, 1000);
});

// Funktion zum Erstellen mehrerer Timer
function createMultipleTimers() {
    const container = document.getElementById("multiple-timers");

    for (let i = 1; i <= 3; i++) {
        const timerDiv = document.createElement("div");
        timerDiv.className = "timer";
        timerDiv.innerHTML = `
            <input type="number" id="timer-input-${i}" placeholder="Zeit in Sekunden">
            <button class="start-multi-timer" data-timer="${i}">Starten</button>
            <p id="timer-display-${i}">0</p>
        `;
        container.appendChild(timerDiv);
    }

    // Event Listener für die Buttons der zusätzlichen Timer
    const multiButtons = document.querySelectorAll(".start-multi-timer");
    multiButtons.forEach(button => {
        button.addEventListener("click", function() {
            const timerId = this.getAttribute("data-timer");
            const timeInput = document.getElementById(`timer-input-${timerId}`).value;
            let timeRemaining = parseInt(timeInput);
            const display = document.getElementById(`timer-display-${timerId}`);

            if (isNaN(timeRemaining) || timeRemaining <= 0) {
                alert("Bitte gib eine gültige Zeit in Sekunden ein.");
                return;
            }

            const timerInterval = setInterval(function() {
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    display.textContent = "Fertig!";
                    display.classList.add("fertig");
                } else {
                    display.textContent = timeRemaining;
                    timeRemaining--;
                }
            }, 1000);
        });
    });
}

// Mehrere Timer initialisieren
createMultipleTimers();
