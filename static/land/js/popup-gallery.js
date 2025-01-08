"use strict";
function ScrollStop() {
    return false;
}
function ScrollStart() {
    return true;
}
$(document).ready(function() {
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    $('.lightbox-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    $('.header-search-form').magnificPopup({
        mainClass: 'mfp-fade',
        closeOnBgClick: false,
        preloader: false,
        whitebg: true,
        fixedContentPos: false,
        callbacks: {
            open: function() {
                setTimeout(function() {
                    $('.search-input').focus();
                }, 500);
                $('#search-header').parent().addClass('search-popup');
                if (!isMobile) {
                    $('body').addClass('overflow-hidden');
                    document.onmousewheel = ScrollStop;
                } else {
                    $('body, html').on('touchmove', function(e) {
                        e.preventDefault();
                    });
                }
            },
            close: function() {
                if (!isMobile) {
                    $('body').removeClass('overflow-hidden');
                    $('#search-header input[type=text]').each(function(index) {
                        if (index == 0) {
                            $(this).val('');
                            $("#search-header").find("input:eq(" + index + ")").css({
                                "border": "none",
                                "border-bottom": "2px solid #000"
                            });
                        }
                    });
                    document.onmousewheel = ScrollStart;
                } else {
                    $('body, html').unbind('touchmove');
                }
            }
        }
    });
    $('.simple-ajax-popup-align-top').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll',
        callbacks: {
            open: function() {
                $('.navbar .collapse').removeClass('in');
                $('.navbar a.dropdown-toggle').addClass('collapsed');
            }
        }
    });
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            open: function() {
                if (!isMobile)
                    $('body').addClass('overflow-hidden');
            },
            close: function() {
                if (!isMobile)
                    $('body').removeClass('overflow-hidden');
            }
        }
    });
    $('.popup-youtube-landing').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        blackbg: true,
        fixedContentPos: false,
        callbacks: {
            open: function() {
                if (!isMobile)
                    $('body').addClass('overflow-hidden');
            },
            close: function() {
                if (!isMobile)
                    $('body').removeClass('overflow-hidden');
            }
        }
    });
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true,
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside: true,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    $('.modal-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        blackbg: true
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        blackbg: true,
        mainClass: 'my-mfp-zoom-in'
    });
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        blackbg: true,
        mainClass: 'my-mfp-slide-bottom'
    });
});
