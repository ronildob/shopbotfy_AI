"use strict";
var isTouchDevice = "ontouchstart"in window || navigator.msMaxTouchPoints;
if (!isTouchDevice) {
    ;(function($, window, undefined) {
        var $allDropdowns = $();
        $.fn.dropdownHover = function(options) {
            if ('ontouchstart'in document)
                return this;
            $allDropdowns = $allDropdowns.add(this.parent());
            return this.each(function() {
                var $this = $(this), $parent = $this.parent(), defaults = {
                    delay: 100,
                    instantlyCloseOthers: true
                }, data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                }, showEvent = 'show.bs.dropdown', hideEvent = 'hide.bs.dropdown', settings = $.extend(true, {}, defaults, options, data), timeout;
                $parent.hover(function(event) {
                    if (!$parent.hasClass('open') && !$this.is(event.target)) {
                        return true;
                    }
                    openDropdown(event);
                }, function() {
                    timeout = window.setTimeout(function() {
                        $parent.removeClass('open');
                        $this.trigger(hideEvent);
                    }, settings.delay);
                });
                $this.hover(function(event) {
                    if (!$parent.hasClass('open') && !$parent.is(event.target)) {
                        return true;
                    }
                    openDropdown(event);
                });
                $parent.find('.dropdown-submenu').each(function() {
                    var $this = $(this);
                    var subTimeout;
                    $this.hover(function() {
                        window.clearTimeout(subTimeout);
                        $this.children('.dropdown-menu').show();
                        $this.siblings().children('.dropdown-menu').hide();
                    }, function() {
                        var $submenu = $this.children('.dropdown-menu');
                        subTimeout = window.setTimeout(function() {
                            $submenu.hide();
                        }, settings.delay);
                    });
                });
                function openDropdown(event) {
                    $allDropdowns.find(':focus').blur();
                    if (settings.instantlyCloseOthers === true)
                        $allDropdowns.removeClass('open');
                    window.clearTimeout(timeout);
                    $parent.addClass('open');
                    $this.trigger(showEvent);
                }
            });
        }
        ;
        $(document).ready(function() {
            $('[data-hover="dropdown"]').dropdownHover();
        });
    }
    )(jQuery, this);
}
