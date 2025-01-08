document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('profile-avatar');
    const dropdown = document.getElementById('profile-dropdown');

    avatar.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!avatar.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});
