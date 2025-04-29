document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".background");
    const video = document.getElementById("myVideo");

    // Через 3 секунды чёрный фон исчезает, появляется видео
    setTimeout(() => {
        background.style.opacity = "0";
        video.style.opacity = "1";
    }, 3000);
});
