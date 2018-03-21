/*$(document).ready(function() {$("#backToTop").hide();
$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});
    $('#backToTop').click(function () {
        $('body,html').animate({scrollTop: 0},300);
        return false;
    });
});*/
var upElem = document.getElementById('backToTop');
var pageYLabel = 0;
upElem.onclick = function() {
    var pageY = window.pageYOffset || document.scrollTop;
    if (pageYLabel = pageY)
        window.scrollTo(0, 0);
}
window.onscroll = function() {myFunction()}; 
    function myFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("backToTop").className = ""; 
    }else { 
        document.getElementById("backToTop").className = "hidden";
    }
  }


    $(document).ready(function(){
        var headerTop = $('.header_bottom').offset().top;
        
        $(window).scroll(function(){
                if( $(window).scrollTop() > headerTop ) {
                        $('.header_bottom').css({position: 'fixed', top: '0px'});
                        $('.header_bottom').addClass('sticky');
                } else {
                        $('.header_bottom').css({position: 'static'});
                        $('.header_bottom').toggleClass('sticky');
                }
            
        });
    });
/*$(document).ready(function() {
    $('.menu').click(function(){
        $('ul').toggleClass('active');
    })
})*/
var menu = document.querySelector('.menu');
var menuBar = document.querySelector('.menu_Bar');
menu.addEventListener('click',function(event){
    if (menuBar.className == 'active') {
       menuBar.className = "";
    } else {
       menuBar.className = 'active';
    }
    return false;
});

var poisk = document.getElementById('lupa');
    poisk.onclick = function() {
      search.classList.toggle('active');
      return false;
    };
