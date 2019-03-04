$(document).ready(function() {

  //interupteur on/off

   var statut = false;
    $(".mybutton").click(function() {
      if (!statut) {
        $('#interupt').animate({left: "86px"});
        statut = true;
        $('.dropdown').css('opacity', 1)
      }
      else {
        $("#interupt").animate({left: "0px"});
        statut = false;
        $('.dropdown').css('opacity', 0)
      }

    });

    //dropdown toggle



});

