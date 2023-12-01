document.addEventListener('DOMContentLoaded', function() {
    const btnSwitch = document.getElementById('switch');

    btnSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
    });
});