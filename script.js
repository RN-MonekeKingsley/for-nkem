// Password for Nkem ❤️
const correctPassword = "KingRex04!";

function unlock() {

    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (password === correctPassword) {

        const screen = document.getElementById("password-screen");

        screen.innerHTML = `
            <div class="welcome-screen">
                <h1>❤️</h1>
                <h2>Welcome, My Nkem</h2>
                <p>You've just unlocked a little piece of my heart...</p>
            </div>
        `;

        setTimeout(() => {

            screen.style.display = "none";
            document.getElementById("main-content").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 3000);

    } else {

        error.innerHTML = "❌ Wrong password. Try again, my love ❤️";
        document.getElementById("password").value = "";
    }
}

// Press Enter to unlock
document.getElementById("password").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        unlock();
    }

});
