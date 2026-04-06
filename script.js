// Button logic (SAFE demo only)
function handleClick() {
  const value = document.getElementById("input").value;

  if (!value) {
    alert("Please enter text");
    return;
  }

  console.log("User input:", value);
  alert("Sent (demo only, check console)");
}


// ⭐ Star background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#3b82f6";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();
