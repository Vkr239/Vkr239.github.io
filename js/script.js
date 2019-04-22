$(document).ready(function () {

    // Cache selectors
    var lastId,
    topMenu = $(".navbar-nav"),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    }),
    noScrollAction = false;
    scroll_active();

    function scroll_active() {
      scroll_fixed_menu();
      // Bind to scroll
      if (!noScrollAction) {
        // Get container scroll position
        var fromTop = $(this).scrollTop();
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
          if ($(this).offset().top-25 < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        console.log("id -> "+id);
        if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          $('.navbar-nav .nav-link').removeClass('active');
          $('.navbar-nav li a').each(function () {
            if (id === "") id = "news";
           var currLink = $(this);
           var refElement = $(currLink.attr("href"));
           if (refElement.attr("id") === id) {
             currLink.addClass("active");
           }
          });
        }
      }
      
    }

    function scroll_fixed_menu() {
      var docscroll=$(document).scrollTop();
      if(($('.navbar-toggler').css('display') == "block") && docscroll>228.9){
        $('.navbar').addClass('fixed-top');

      }else{
        $('.navbar').removeClass('fixed-top');
      }
    }

    $(window).scroll(scroll_active);

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
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      noScrollAction = true;
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
      $(".navbar-toggler").toggleClass("is-active");
      $(".navbar-collapse").toggleClass("show");
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      menu = $('.navbar').hasClass("fixed-top")
      if ($('.navbar-toggler').css('display') == "none") {
        var top = $(id).offset().top;
      } else {
        if(menu){
          var top = $(id).offset().top-30;
        } else {
          var top = $(id).offset().top-70;
        }
      }
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1000);
      setTimeout(function(){ noScrollAction = false; }, 1100);
    });

  });