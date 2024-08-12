
// Dropdown
const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".sBtn-text");

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption

        optionMenu.classList.remove("active");
    })

})
selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
})





// Time
function startCountdown(targetDate) {
    var countdownInterval = setInterval(function () {
        var currentDate = new Date();
        var difference = targetDate - currentDate;

        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        if (difference < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Set the target date (800 hours from now)
var targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 800);

// Start countdown
startCountdown(targetDate);

// Số lượng sản phẩm đã bán (demo)
document.addEventListener('DOMContentLoaded', function () {

    var soldQuantity = 620; // demo
    var totalQuantity = 896; // demo


    var salesPercentage = (soldQuantity / totalQuantity) * 100;

    var progressBar = document.getElementById('progressBar');
    var progressLabel = document.getElementById('progressLabel');
    var soldCount = document.getElementById('soldCount');


    progressBar.style.width = salesPercentage + '%';


    progressLabel.textContent = salesPercentage.toFixed(2) + '%';

    // Hiển thị số lượng đã bán và tổng số lượng
    soldCount.innerHTML = `Sold: <b>${soldQuantity}/${totalQuantity}</b> products`
});


// Toggle menu

const btnToggleMenu = document.querySelector("#btn-toggle-menu");
const btnCloseToggle = document.querySelector("#close-toggle");

const boxMenu = document.querySelector(".box-toggle");

btnToggleMenu.addEventListener('click', function () {
    boxMenu.classList.toggle('hide');
});

btnCloseToggle.addEventListener('click', function () {
    boxMenu.classList.remove('hide');
});