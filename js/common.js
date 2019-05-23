
function change () {
  setTimeout(
    function () {
      document.getElementById('parent_popup').style.display='block';
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
    $('#nav').css('display', 'block');
    $('.toggle').click(function(){
        $('#nav').css('display', 'none');
        $('.toggle').click(function(){
            $('#nav').css('display', 'block');
            $('.toggle').click(function(){
                $('#nav').css('display', 'none');
                $('.toggle').click(function(){
                    $('#nav').css('display', 'block');
                    $('.toggle').click(function(){
                        $('#nav').css('display', 'none');
                        $('.toggle').click(function(){
                            $('#nav').css('display', 'block');
                            $('.toggle').click(function(){
                                $('#nav').css('display', 'none');
                                $('.toggle').click(function(){
                                    $('#nav').css('display', 'block');
                                    $('.toggle').click(function(){
                                        $('#nav').css('display', 'none');
                                        $('.toggle').click(function(){
                                            $('#nav').css('display', 'block');
                                            $('.toggle').click(function(){
                                                $('#nav').css('display', 'none');
                                                $('.toggle').click(function(){
                                                    $('#nav').css('display', 'block');
                                                    $('.toggle').click(function(){
                                                        $('#nav').css('display', 'none');
                                                        $('.toggle').click(function(){
                                                            $('#nav').css('display', 'block');
                                                            $('.toggle').click(function(){
                                                                $('#nav').css('display', 'none');
                                                                $('.toggle').click(function(){
                                                                    $('#nav').css('display', 'block');
                                                                    $('.toggle').click(function(){
                                                                        $('#nav').css('display', 'none');
                                                                        $('.toggle').click(function(){
                                                                            $('#nav').css('display', 'block');
                                                                            $('.toggle').click(function(){
                                                                                $('#nav').css('display', 'none');

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
