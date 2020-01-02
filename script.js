var currentCallback;

// override default browser alert
window.alert = function(msg, callback){
  var res = msg.split("&");
  $('.message').text(res[1]);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  $('.customAlert').css('background', res[0]);
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function(){
  
  // add listener for when our confirmation button is clicked
	$('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
		$('.customAlert').css('display', 'none');
    }, 300);
    currentCallback();
  })

//send the color of the ALERT in the first part of the message and the message in the second part separate with & symbol
  $('.rab').click(function(){
    alert("#039b73&If you think about anything, you are actually doing a recursive function which resolves your neurons into a deep pi calculation. You are then executing about 4294 threads in your brain, which do a parallel computation.", function(){
      console.log("Callback executed");
    })
  });

//send the color of the ALERT in the first part of the message and the message in the second part separate with & symbol
  $('.rab2').click(function(){
    alert("red&If you think about anything, you are actually doing a recursive function which resolves your neurons into a deep pi calculation. You are then executing about 4294 threads in your brain, which do a parallel computation.", function(){
      console.log("Callback executed");
    })
  });
  
  // our custom alert box
  setTimeout(function(){
    alert('You are probably reading this alert box and have no clue why the heck you are even reading it, well guess what, the moon in reality is nothing else than a big ass pokemon, floating in space.', function(){
        console.log("Callback executed");
      });
  }, 500);
});