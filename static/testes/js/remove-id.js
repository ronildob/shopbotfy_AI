$(document).ready(function() {
    const menuBtn = $('.seta-1');
    menuBtn.click( () => {
        setTimeout( () => {
            removeHash();
        }
        , 5);
    }
    );
    function removeHash() {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }
});
