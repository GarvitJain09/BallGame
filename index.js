let ball = document.getElementById('circle');

// Write your code below
function up() {
    ball.style.bottom = '250px';
}

function down() {
    ball.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);