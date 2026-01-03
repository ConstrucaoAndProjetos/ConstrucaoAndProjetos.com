// Arrow Up visibility - Show when scrolled down more than 100px
window.onscroll = function () {
    const arrow = document.getElementById('arrowUp');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
};

// Optional: Smooth scroll to top when arrow is clicked
document.getElementById('arrowUp').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});