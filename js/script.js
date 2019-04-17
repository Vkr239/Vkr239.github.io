$(document).ready(function () {
  
    $(window).scroll(function(){
      var docscroll=$(document).scrollTop();
      if(docscroll>200){
        $('.navbar').css({'padding': '5px 0'}).addClass('fixed-top').removeClass('p-0');
      }else{
        $('.navbar').removeClass('fixed-top').addClass('p-0');
      }
    });

    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("is-active");
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $(".navbar").on("click","a", function (event) {
      console.log("screen.width -> "+screen.width);
      console.log("screen.height -> "+screen.height);
      console.log("document.body.clientWidth -> "+document.body.clientWidth);
      console.log("document.body.clientHeight -> "+document.body.clientHeight);
      console.log("$(window).width() -> "+$(window).width());
      console.log("$(window).height() -> "+$(window).height());
      console.log("body.offsetWidth -> "+document.body.offsetWidth);
      // if () {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        $(".navbar-toggler").toggleClass("is-active");
        $(".navbar-collapse").toggleClass("show");
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        menu = $('.navbar').hasClass("fixed-top")
        if (menu) {
          var top = $(id).offset().top-30;
        } else {
          var top = $(id).offset().top-70;
        }

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
      // }
      
      
      
    });

  });