document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('openMenu');
    var navList =  document.getElementsByClassName('d-none')[0];

    hamburger.addEventListener('click', function (e) {
        e.preventDefault();

        navList.classList.toggle('d-flex');
        hamburger.classList.toggle('rotate');
    });
});



