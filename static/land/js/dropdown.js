document.addEventListener('DOMContentLoaded', function () {
    function toggleDropdown() {
        var dropdown = document.getElementById('ministerios-dropdown');
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }
    
    document.querySelector('.dropdown-button').addEventListener('click', toggleDropdown);
});

