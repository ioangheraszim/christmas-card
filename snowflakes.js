// Snowflake Animation
const snowContainer = document.getElementById("snow-container");

// Create a snowflake
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = 2 + Math.random() * 3 + "s"; // Fall speed
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Size

  snowflake.innerHTML = "&#10052;"; // Unicode for snowflake
  snowContainer.appendChild(snowflake);

  // Remove snowflake after animation
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 50);
