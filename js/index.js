var waveOneinc = 0;
var waveTwoinc = 25;
var waveThreeinc = 35;
setInterval(function(){
  $('#wave-one').css('transform', 'rotate('+waveOneinc+'deg)');
  waveOneinc+=1.15;
  waveTwoinc+=1.25;
  waveThreeinc+=1.35;
  $('#wave-two').css('transform', 'rotate('+waveTwoinc+'deg)');
 $('#wave-three').css('transform', 'rotate(-'+waveThreeinc+'deg)');
}, 20);

   var $val = $('.input').val();
   if($val == 100){
        $('#wave-one,#wave-two,#wave-three').css('top','-400px');
        $('#container').css('background','linear-gradient(to bottom, rgba(253,152,129,1) 0%,rgba(253,152,129,1) 100%')
   }else if($val < 90 && $val > 80){
        $('#wave-one,#wave-two,#wave-three').css('top','-350px');
        $('#container').css('background','linear-gradient(to bottom, rgba(253,152,129,0.8) 0%,rgba(253,152,129,1) 100%')
   }else if($val < 80 && $val >= 70){
        $('#wave-one,#wave-two,#wave-three').css('top','-250px');
        $('#container').css('background','linear-gradient(to bottom, rgba(253,152,129,0) 0%,rgba(253,152,129,1) 100%')
   }else if($val < 70 && $val >= 60){
        $('#wave-one,#wave-two,#wave-three').css('top','-200px');
        $('#container').css('background','linear-gradient(to bottom, rgba(253,152,129,0) 0%,rgba(253,152,129,1) 100%')
   }