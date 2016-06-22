$(document ).ready(function() {


    $(function(){
        $(".regular").slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });


    $('#menu0').text(contentData.menu[0]);
    $('#menu1').text(contentData.menu[1]);
    $('#menu2').text(contentData.menu[2]);
    $('#menu3').text(contentData.menu[3]);
    $('#aboutus').text(contentData.about);
    $('#aboutServices').text(contentData.allSerivces);
    $('#someServices1').text(contentData.someService1);
    $('#someServices2').text(contentData.someService2);
    $('#someServices3').text(contentData.someService3);
    $('#someServices4').text(contentData.someService4);
    $('#someServices5').text(contentData.someService5);
    $('#someServices6').text(contentData.someService6);
    $('#blogNews').text(contentData.blogNews);
    $('#contactUs').text(contentData.contactInfo);
    $('#newsBox1').text(contentData.newsBox1);

});

