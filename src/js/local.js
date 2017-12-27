$(document).ready(function () {
    var body = $('body');

    body.on('click', '.mobile-only-show', function(event){
        event.preventDefault();
        body.append($('.map-container'));
        $('.map-container').addClass('show');
        $('.page__wrap').hide();

        return false

    });

    body.on('click', '.mobile-only-close', function (event) {
        event.preventDefault();
        $('.map-container').removeClass('show');
        $('.js-before-table').after($('.map-container'));
        $('.page__wrap').show();
        $('html, body').animate({ scrollTop: $('.map-container').position().top }, 500);
        return false
    });

    body.on('click', '.map-btn', function (event) {
        event.preventDefault();
        if ($(this).siblings('.map-btn__container').hasClass('visible')) {
            $(this).siblings('.map-btn__container').removeClass('visible');
        }
        else {
            $('.map-btn__container').removeClass('visible');
            $(this).siblings('.map-btn__container').addClass('visible');
        }
    });

    body.mouseup(function(event) {
        if ($('.map-btn__wrapper').has(event.target).length === 0) {
            $('.map-btn__container').removeClass('visible');
        }
    });

    body.on('click', '.mobile-only-close', function(event){
        event.preventDefault();
        $('.blur').removeClass('show');
        $('.popup').removeClass('show');
        $('.text-box--map').append($('.map-container'));
        $('.map-img--big').css('transform', 'scale(1)');

        return false

    });

    body.on('mousedown', '.map-btn__embed-copy', function(event){
        event.preventDefault();
        $(this).css('background', '#fc5c55');

        return false

    });

    body.on('mouseup', '.map-btn__embed-copy', function(event){
        event.preventDefault();
        $(this).css('background', '#fc746e');

        return false

    });

    function topMenu() {
        if ($(window).width() < 959) {

            body.on('click', '.top-menu__link.active', function () {
                $(this).parents('.top-menu__wrap').toggleClass('open');
                return false
            });
        }

    }

    topMenu();
    $(window).on('resize', function () {
        topMenu();
    });

    body.on('click', '.graph-img__wrapper', function(event){
        event.preventDefault();
        if($(window).width() < 779) {
            $(this).hasClass('graph-img__wrapper--grumpy') ? openPhotoSwipe(items1) : openPhotoSwipe(items2);
        }
        return false

    });

    function btnClick(elem, initColor, ultColor) {
      body.on('mousedown', elem, function(event){
        event.preventDefault();
        $(this).css('background', initColor);

        return false

      });

      body.on('mouseup', elem, function(event){
          event.preventDefault();
          $(this).css('background', ultColor);

          return false

      });
    };
    if($(window).width() < 779) {
      btnClick('.map-btn', '#ffdad8', '#ffffff');
    }

    body.on('focus', '#copyTarget', function(event){
          $(this).select();
    });

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

// $(window).on('resize', function () {
//         $('.grump-map').attr('src', $('iframe').attr('src'));
//     });

document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget"));
});

// function throttle(fn, threshhold, scope) {
//   threshhold || (threshhold = 250);
//   var last,
//       deferTimer;
//   return function () {
//     var context = scope || this;

//     var now = +new Date,
//         args = arguments;
//     if (last && now < last + threshhold) {
//       // hold on to it
//       clearTimeout(deferTimer);
//       deferTimer = setTimeout(function () {
//         last = now;
//         fn.apply(context, args);
//       }, threshhold);
//     } else {
//       last = now;
//       fn.apply(context, args);
//     }
//   };
// };

// var onResizeWindow = function() {
//   google.charts.setOnLoadCallback(drawRegionsMap);
// };

// window.addEventListener("resize", throttle(onResizeWindow, 300));
