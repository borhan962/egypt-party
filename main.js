
$('.open').click(function () {
    $('.nav').animate({width:'250px'},50)
    $('.open').animate({marginLeft:'250px'},50)
  })

  $('.closeBtn').click(function () {
    $('.nav').animate({width:'0px'},50)
    $('.open').animate({marginLeft:'0px'},50)
    $(".open").fadeout(300)
  })


$('#slider h2').click(function(){
     
    $(this).next(".inner").slideToggle(500);

    $("#slider p").not($(this).next(".inner")).slideUp()
})



let countdown = new Date("2025/01/01").getTime()

let counter = setInterval(()=>{

  let now = new Date().getTime();

  let dataDiff =  (countdown - now)
 

  let days = Math.floor( dataDiff / (1000*60*60*24));
  let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60));
  let secs = Math.floor((dataDiff % (1000 * 60)) / (1000));
  console.log(secs);



$("#days").html(`${days}`);
$("#hours").html(`${hours}`);
$("#minutes").html(`${ mins }`);
$('#second').html(`${ secs}`);
  
},1000)




var max = 100;
$('textarea').keyup(function(){
    var length = $(this).val().length;
    var Amountleft = max - length;
    if (Amountleft <= 0) {
      $("#chars").text("your available character finished");
    }else{
         $('#chars').text(Amountleft)
    }
})
