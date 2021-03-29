VanillaTilt.init(document.querySelector(".main__img"), {
		max: 25,
		speed: 200
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".main__img"));



	(function($) {

    $(document).on('click', '.form__groups a , .form__link-box', function(e) {
      e.preventDefault();
  
      var $this = $(this),
        id = $this.data('id');
  
      $('.form__groups-data .active').removeClass('active');
      $('.form__groups .active').removeClass('active');
  
      $(this).addClass('active');
      $('#group-' + id).addClass('active');
    });
  
  })(jQuery);


  $(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list-mobile').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});