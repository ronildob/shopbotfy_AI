function submitSearch(event) {
    event.preventDefault();

    const form = document.getElementById('searchForm');
    const iframe = document.getElementById('contentFrame');
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    // Define o novo src do iframe
    iframe.src = form.action + '?' + queryString;
}
