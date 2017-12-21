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

            /*$('.top-menu__wrap.open').on('click', function(){
             $('.top-menu__wrap').removeClass('open');
             return false
             })*/
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
    $(window).resize(function() {
      google.charts.setOnLoadCallback(drawRegionsMap);
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

});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget"));
});

google.charts.load('current', {'packages':['geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});

    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
          ['State', 'GrumpIndex', '% Grumpy'],
          ['Washington D.C.', 92.81948402, 14.24951558],
          ['Colorado', 73.56762196, 15.93882069],
          ['Oregon', 68.01359529, 14.97667567],
          ['California', 65.58714673, 14.44040749],
          ['Arizona', 65.22188641, 14.80846198],
          ['Nevada', 62.32736325, 14.78676764],
          ['Massachusetts', 61.00683328, 12.64741387],
          ['Washington', 57.08148591, 13.30693069],
          ['New York', 53.86405102, 13.05851971],
          ['Kentucky', 53.77407561, 19.1011236],
          ['Illinois', 50.88798862, 12.68416723],
          ['Texas',47.84953543, 12.69091536],
          ['Ohio', 45.08986946, 12.97831633],
          ['Indiana', 44.96086318, 13.91585761],
          ['Rhode Island', 44.76793941, 12.20876048],
          ['New Mexico', 42.11545082, 13.45480028],
          ['Connecticut', 41.83517866, 11.13065327],
          ['Wyoming', 40.63633454, 16.66666667],
          ['Vermont', 39.05714261, 11.51919866],
          ['Maryland', 36.93241726, 11.11491108],
          ['Alaska', 35.39557813, 10.4859335],
          ['Virginia' ,35.03624774, 10.95592004],
          ['Pennsylvania', 34.32663077, 11.3342379],
          ['Utah', 33.42453533, 14.07166124],
          ['Oklahoma', 32.33174875, 14.01112797],
          ['Minnesota', 30.4265062, 11.58178257],
          ['Hawaii', 29.05655246, 10.17830609],
          ['Michigan', 28.38621344, 11.63320518],
          ['Missouri', 26.57304714, 11.67082294],
          ['North Carolina', 26.43404141, 11.37156411],
          ['Georgia', 25.76332379, 11.22884271],
          ['Maine', 22.72583753, 9.777777778],
          ['South Carolina', 16.85960688, 11.66848419],
          ['Tennessee', 14.46313033, 11.1226882],
          ['Arkansas', 13.23214103, 13.08777429],
          ['Nebraska', 12.64700863, 11.65714286],
          ['Montana', 12.06187623, 11.38211382],
          ['Kansas', 11.47674383, 10.94946401],
          ['Idaho', 10.89161143, 11.24437781],
          ['South Dakota', 10.30647903, 11.44578313],
          ['West Virginia', 9.72134663, 11.43292683],
          ['Florida', 9.13621423, 10.87387942],
          ['Wisconsin', 8.55108183, 9.962228518],
          ['New Jersey', 7.96594943, 9.754948162],
          ['North Dakota', 7.38081703, 12.10526316],
          ['Alabama', 6.79568463, 10.28761062],
          ['Iowa', 6.21055223, 9.978308026],
          ['Delaware', 5.62541983, 9.407216495],
          ['New Hampshire', 5.04028743, 8.75502008],
          ['Mississippi', 4.45515503, 9.848484849],
          ['Louisiana', 3.87002263, 10.02277904]
        ]);

      var options = {
        region: 'US',
        displayMode: 'region',
        sizeAxis: { minValue: 0, maxValue: 100 },
        resolution: 'provinces',
        colorAxis: {colors: ['#fc6860', '#fd8649', '#fe983b', '#ffac2c', '#ffbd1f', '#edc527', '#c9c246', '#9cbe6d', '#79ba8b', '#46b6b9']},
        legend: {color: 'blue', fontSize: 16}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('map-wrapper'));

      chart.draw(data, options);
    };