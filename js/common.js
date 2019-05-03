// article start
$(function(){

  $('#article_firstCircle').hover(function(){
     $('#article_second').hide();
     $('#article_third').hide();
     $('#article_forth').hide();
     $('#article_fifth').hide();
     $('#article_first').show();
     $('.article_a--firstCircle').addClass('article_circle--green');
     $('.article_a--secondCircle').removeClass('article_circle--green');
     $('.article_a--thirdtCircle').removeClass('article_circle--green');
     $('.article_a--fortthtCircle').removeClass('article_circle--green');
     $('.article_a--fifitCircle').removeClass('article_circle--green');
     $('.article_a--firstCircle').removeClass('article_a--firstCircleAdd');
  });

  $('#article_secondCircle').hover(function(){
    $('#article_third').hide();
    $('#article_forth').hide();
    $('#article_fifth').hide();
    $('#article_first').hide();
    $('#article_second').show();
    $('.article_a--firstCircle').removeClass('article_circle--green');
    $('.article_a--secondCircle').addClass('article_circle--green');
    $('.article_a--thirdtCircle').removeClass('article_circle--green');
    $('.article_a--fortthtCircle').removeClass('article_circle--green');
    $('.article_a--fifitCircle').removeClass('article_circle--green');
    $('.article_a--firstCircle').addClass('article_a--firstCircleAdd');


  });

  $('#article_thirdtCircle').hover(function(){
    $('#article_forth').hide();
    $('#article_fifth').hide();
    $('#article_first').hide();
    $('#article_second').hide();
    $('#article_third').show();
    $('.article_a--firstCircle').removeClass('article_circle--green');
    $('.article_a--secondCircle').removeClass('article_circle--green');
    $('.article_a--thirdtCircle').addClass('article_circle--green');
    $('.article_a--fortthtCircle').removeClass('article_circle--green');
    $('.article_a--fifitCircle').removeClass('article_circle--green');
    $('.article_a--firstCircle').addClass('article_a--firstCircleAdd');
  });

  $('#article_fortthtCircle').hover(function(){
    $('#article_fifth').hide();
    $('#article_first').hide();
    $('#article_second').hide();
    $('#article_third').hide();
    $('#article_forth').show();
    $('.article_a--firstCircle').removeClass('article_circle--green');
    $('.article_a--secondCircle').removeClass('article_circle--green');
    $('.article_a--thirdtCircle').removeClass('article_circle--green');
    $('.article_a--fortthtCircle').addClass('article_circle--green');
    $('.article_a--fifitCircle').removeClass('article_circle--green');
    $('.article_a--firstCircle').addClass('article_a--firstCircleAdd');
  });

  $('#article_fifitCircle').hover(function(){
    $('#article_first').hide();
    $('#article_second').hide();
    $('#article_third').hide();
    $('#article_forth').hide();
    $('#article_fifth').show();
    $('.article_a--firstCircle').removeClass('article_circle--green');
    $('.article_a--secondCircle').removeClass('article_circle--green');
    $('.article_a--thirdtCircle').removeClass('article_circle--green');
    $('.article_a--fortthtCircle').removeClass('article_circle--green');
    $('.article_a--fifitCircle').addClass('article_circle--green');
    $('.article_a--firstCircle').addClass('article_a--firstCircleAdd');
  });
});
// article end


// production  start
$(function(){

  $('.production_firstCircle').hover(function(){
     $('.production_second').hide();
     $('.production_third').hide();
     $('.production_forth').hide();
     $('.production_fifth').hide();
     $('.production_first').show();

     $('.production_a--firstCircle').addClass('production_circle--green');
     $('.production_a--secondCircle').removeClass('production_circle--green');
     $('.production_a--thirdtCircle').removeClass('production_circle--green');
     $('.production_a--fortthtCircle').removeClass('production_circle--green');
     $('.production_a--fifitCircle').removeClass('production_circle--green');
     $('.production_a--firstCircle').removeClass('production_a--firstCircleAdd');
  });

  $('.production_secondCircle').hover(function(){
    $('.production_second').show();
    $('.production_third').hide();
    $('.production_forth').hide();
    $('.production_fifth').hide();
    $('.production_first').hide();

    $('.production_a--firstCircle').removeClass('production_circle--green');
    $('.production_a--secondCircle').addClass('production_circle--green');
    $('.production_a--thirdtCircle').removeClass('production_circle--green');
    $('.production_a--fortthtCircle').removeClass('production_circle--green');
    $('.production_a--fifitCircle').removeClass('production_circle--green');
    $('.production_a--firstCircle').addClass('production_a--firstCircleAdd');


  });

  $('.production_thirdtCircle').hover(function(){
    $('.production_second').hide();
    $('.production_third').show();
    $('.production_forth').hide();
    $('.production_fifth').hide();
    $('.production_first').hide();

    $('.production_a--firstCircle').removeClass('production_circle--green');
    $('.production_a--secondCircle').removeClass('production_circle--green');
    $('.production_a--thirdtCircle').addClass('production_circle--green');
    $('.production_a--fortthtCircle').removeClass('production_circle--green');
    $('.production_a--fifitCircle').removeClass('production_circle--green');
    $('.production_a--firstCircle').addClass('production_a--firstCircleAdd');
  });

  $('.production_fortthtCircle').hover(function(){
    $('.production_second').hide();
    $('.production_third').hide();
    $('.production_forth').show();
    $('.production_fifth').hide();
    $('.production_first').hide();

    $('.production_a--firstCircle').removeClass('production_circle--green');
    $('.production_a--secondCircle').removeClass('production_circle--green');
    $('.production_a--thirdtCircle').removeClass('production_circle--green');
    $('.production_a--fortthtCircle').addClass('production_circle--green');
    $('.production_a--fifitCircle').removeClass('production_circle--green');
    $('.production_a--firstCircle').addClass('production_a--firstCircleAdd');
  });

  $('.production_fifitCircle').hover(function(){
    $('.production_second').hide();
    $('.production_third').hide();
    $('.production_forth').hide();
    $('.production_fifth').show();
    $('.production_first').hide();

    $('.production_a--firstCircle').removeClass('production_circle--green');
    $('.production_a--secondCircle').removeClass('production_circle--green');
    $('.production_a--thirdtCircle').removeClass('production_circle--green');
    $('.production_a--fortthtCircle').removeClass('production_circle--green');
    $('.production_a--fifitCircle').addClass('production_circle--green');
    $('.production_a--firstCircle').addClass('production_a--firstCircleAdd');

  });

});

//navigation Mobile
  $('#icon_show--catalog').click(function(){
   $('ul#catalog').css( "opacity", "1");
   $('ul#catalog').css( "transform", "scaleY(1)");
   $('#icon_show--catalog').css( "display", "none");
   $('#icon_hide--catalog').css( "display", "block");
   $('ul#catalog').css( "position", "relative");
   $('.catalog_wrapper').css( "background-color", "#009dc6");
  });

  $('#icon_hide--catalog').click(function(){
   $('#icon_hide--catalog').css( "display", "none");
   $('#icon_show--catalog').css( "display", "block");
   $('ul#catalog').css( "opacity", "0");
   $('ul#catalog').css( "transform", "scaleY(0)");
   $('ul#catalog').css( "position", "absolute");
   // $('.catalog_wrapper').css( "background-color", "#009dc6");
  });


  $('#icon_show--aboutCompany').click(function(){
   $('ul#aboutCompany').css( "opacity", "1");
   $('ul#aboutCompany').css( "transform", "scaleY(1)");
   $('#icon_show--aboutCompany').css( "display", "none");
   $('#icon_hide--aboutCompany').css( "display", "block");
   $('ul#aboutCompany').css( "position", "relative");
   $('.catalog_wrapper').css( "background-color", "#009dc6");
  });

  $('#icon_hide--aboutCompany').click(function(){
   $('#icon_hide--aboutCompany').css( "display", "none");
   $('#icon_show--aboutCompany').css( "display", "block");
   $('ul#aboutCompany').css( "opacity", "0");
   $('ul#aboutCompany').css( "transform", "scaleY(0)");
   $('ul#aboutCompany').css( "position", "absolute");
   $('.aboutCompany_wrapper').css( "background-color", "#009dc6");
  });



  $('#icon_show--solutions').click(function(){
   $('#solutions').css( "opacity", "1");
   $('#solutions').css( "transform", "scaleY(1)");
   $('#icon_show--solutions').css( "display", "none");
   $('#icon_hide--solutions').css( "display", "block");
   $('#solutions').css( "position", "relative");
  });

  $('#icon_hide--solutions').click(function(){
   $('#icon_hide--solutions').css( "display", "none");
   $('#icon_show--solutions').css( "display", "block");
   $('#solutions').css( "opacity", "0");
   $('#solutions').css( "transform", "scaleY(0)");
   $('#solutions').css( "position", "absolute");
  });



  $('#icon_show--equipments').click(function(){
   $('#equipments').css( "opacity", "1");
   $('#equipments').css( "transform", "scaleY(1)");
   $('#icon_show--equipments').css( "display", "none");
   $('#icon_hide--equipments').css( "display", "block");
   $('#equipments').css( "position", "relative");
  });


  $('#icon_hide--equipments').click(function(){
   $('#icon_hide--equipments').css( "display", "none");
   $('#icon_show--equipments').css( "display", "block");
   $('#equipments').css( "opacity", "0");
   $('#equipments').css( "transform", "scaleY(0)");
   $('#equipments').css( "position", "absolute");
  });



// production end

// partners  start
$(function(){

  $('.partners_firstCircle').hover(function(){
     $('.partners_a--firstCircle').addClass('partners_circle--green');
     // $('.partners_a--secondCircle').removeClass('partners_circle--green');
     // $('.production_a--firstCircle').removeClass('production_a--firstCircleAdd');
      $('production_a--firstCircle').hide();
  });
  //
  $('.partners_secondCircle').hover(function(){
  //   $('.partners_a--firstCircle').removeClass('partners_circle--green');
    $('.partners_a--secondCircle').addClass('partners_circle--green');
  });

});


function change () {
  setTimeout(
    function () {
      document.getElementById('parent_popup').style.display='flex';
  }, 400);
    event.preventDefault();
};


function change2 () {
  setTimeout(
    function () {
      document.getElementById('parent_popup').style.display='none';
  }, 400);
    event.preventDefault();
};



function change1 () {
  setTimeout(
    function () {
      document.getElementById('popup_answer').style.display='block';
  }, 100);

  setTimeout(
    function () {
      document.getElementById('parent_popup').style.display='none';
  }, 100);

  setTimeout(
    function () {
      // document.getElementById('popup_answer').style.display='none';
      document.getElementById('popup_answer').style.display='none';
  }, 2000);

    const name =  document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    axios.post('http://artur4ik.beget.tech/send', { name, email, phone, message })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    document.getElementById("form").reset();

};



/*DELETE!!!*/
$(function() {
	$('.toggle').click(function(){
		$('.toggle').toggleClass('active');
    $('.nav_mobile').css('display', 'block');
    $('.toggle').click(function(){
        $('.nav_mobile').css('display', 'none');
        $('.toggle').click(function(){
            $('.nav_mobile').css('display', 'block');
            $('.toggle').click(function(){
                $('.nav_mobile').css('display', 'none');
                $('.toggle').click(function(){
                    $('.nav_mobile').css('display', 'block');
                    $('.toggle').click(function(){
                        $('.nav_mobile').css('display', 'none');
                        $('.toggle').click(function(){
                            $('.nav_mobile').css('display', 'block');
                            $('.toggle').click(function(){
                                $('.nav_mobile').css('display', 'none');
                                $('.toggle').click(function(){
                                    $('.nav_mobile').css('display', 'block');
                                    $('.toggle').click(function(){
                                        $('.nav_mobile').css('display', 'none');
                                        $('.toggle').click(function(){
                                            $('.nav_mobile').css('display', 'block');
                                            $('.toggle').click(function(){
                                                $('.nav_mobile').css('display', 'none');
                                                $('.toggle').click(function(){
                                                    $('.nav_mobile').css('display', 'block');
                                                    $('.toggle').click(function(){
                                                        $('.nav_mobile').css('display', 'none');
                                                        $('.toggle').click(function(){
                                                            $('.nav_mobile').css('display', 'block');
                                                            $('.toggle').click(function(){
                                                                $('.nav_mobile').css('display', 'none');
                                                                $('.toggle').click(function(){
                                                                    $('.nav_mobile').css('display', 'block');
                                                                    $('.toggle').click(function(){
                                                                        $('.nav_mobile').css('display', 'none');
                                                                        $('.toggle').click(function(){
                                                                            $('.nav_mobile').css('display', 'block');
                                                                            $('.toggle').click(function(){
                                                                                $('.nav_mobile').css('display', 'none');

                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
	});
});
