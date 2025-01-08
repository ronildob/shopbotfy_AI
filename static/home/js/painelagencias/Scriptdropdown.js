document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggle = document.getElementById('dropdownMenuButton');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Fecha o menu dropdown se clicar fora dele
    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});