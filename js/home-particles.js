document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("particle-container");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]; // Colores de las partículas

    container.addEventListener("mousemove", function(event) {
        const particle = document.createElement("span");
        particle.classList.add("particle");
        particle.style.left = event.clientX + "px";
        particle.style.top = event.clientY + "px";
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(particle);

        setTimeout(function() {
            particle.remove();
        }, 1000);
    });
});

