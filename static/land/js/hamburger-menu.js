function bindEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
    }
}
(function () {
    var bodyEl = document.body
        , openbtn = document.getElementById('open-button')
        , closebtn = document.getElementById('close-button')
        , isOpen = false;
    function init() {
        initEvents();
    }
    function initEvents() {
        if (openbtn) {
            bindEvent(openbtn, 'click', toggleMenu);
        }
        if (closebtn) {
            bindEvent(closebtn, 'click', toggleMenu);
        }
    }
    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
            if ($(".full-width-pull-menu").length) {
                classie.remove(bodyEl, 'overflow-hidden');
            }
        } else {
            classie.add(bodyEl, 'show-menu');
            if ($(".full-width-pull-menu").length) {
                classie.add(bodyEl, 'overflow-hidden');
            }
        }
        isOpen = !isOpen;
    }
    init();
}
)();

