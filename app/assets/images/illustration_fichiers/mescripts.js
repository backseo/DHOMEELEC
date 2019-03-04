$(document).ready(function() {

  $(".imgover").hover(
    function(){ $(this).addClass('img-m-over') },
    function(){ $(this).removeClass('img-m-over') }
 )

  $(".img").hover(
    function(){ $(this).addClass('img-m-over') },
    function(){ $(this).removeClass('img-m-over') },
    );

});
