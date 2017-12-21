var items1 = [
    {
        src: 'images/photo/grump-scheme-780.png',
        srcset: 'images/photo/grump-scheme-780@2x.png 2x',
        w: 740,
        h: 932
    }
];

var items2 = [
    {
        src: 'images/photo/happy-scheme-780.png',
        srcset: 'images/photo/happy-scheme-780@2x.png 2x',
        w: 740,
        h: 932
    }
];

var openPhotoSwipe = function(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = items;

    var options = {

        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



