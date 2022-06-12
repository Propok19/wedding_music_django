$(document).ready(function(){
    // Плавная прокрутка
    $('.first').click( function(){
        let scroll_el = $(this).attr('href');
        if ($(content).length != 0) {
            $('html, body').animate({ scrollTop: $(content).offset().top }, 1200);
        }
        return false;
    });
});

document.addEventListener("DOMContentLoaded", (e)=> {

//dom объекты элементов контроля
          let av = document.getElementById("av-tag");
          let playTime = document.getElementsByClassName("play-time")[0];
          let playBtn=document.getElementsByClassName("play-btn")[0];
          let curTime=document.getElementById("cur-time");
          let volume = document.getElementById("volume");
          let speaker=document.getElementById("speaker");

//переменная для отслеживания воспроизведения звука
          let isPlaying = false;

          av.onloadedmetadata = function() {
            curTime.max=av.duration;
            };

//функция вывода текущего времени воспроизведения
          av.ontimeupdate=function() {

              let sec_num = av.currentTime;
              let hours   = Math.floor(sec_num / 3600);
              let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
              let seconds = sec_num - (hours * 3600) - (minutes * 60);
              seconds=Math.round(seconds);

              if (hours < 10) {
                hours   = "0"+hours;
              }
              if (minutes < 10) {
                minutes = "0"+minutes;
              }
              if (seconds < 10) { seconds = "0"+seconds; } playTime.innerHTML = minutes+':'+seconds;
              if(isPlaying) curTime.value=av.currentTime;
         };
//функция для настройки громкости
         volume.onchange=function() {

              av.volume = volume.value/10;
         };
//функция для установки начала воспроизведения
         curTime.onchange=function() {

              av.pause(); av.currentTime=curTime.value; av.play();
         };
//функция для вкл/выкл громкости
         speaker.onclick=function() {

          if(volume.value==0) {
             volume.value=10; av.volume=1;
          } else {
             volume.value=0; av.volume=0;
          } };
//функция для play/pause и изображения кнопки воспроизведения
         playBtn.addEventListener("click", (a)=> {

          if(isPlaying)
          {
            av.pause();
            isPlaying=false;
            playBtn.innerHTML="►";
          }
          else
          {
            av.play();
            isPlaying=true;
            playBtn.innerHTML="❚❚";
          }

        });

    });




// $(document).ready(function() {
//   var panelOne = $('.form-panel.two').height(),
//     panelTwo = $('.form-panel.two')[0].scrollHeight;

//   $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
//     e.preventDefault();

//     $('.form-toggle').addClass('visible');
//     $('.form-panel.one').addClass('hidden');
//     $('.form-panel.two').addClass('active');
//     $('.form').animate({
//       'height': panelTwo
//     }, 200);
//   });

//   $('.form-toggle').on('click', function(e) {
//     e.preventDefault();
//     $(this).removeClass('visible');
//     $('.form-panel.one').removeClass('hidden');
//     $('.form-panel.two').removeClass('active');
//     $('.form').animate({
//       'height': panelOne
//     }, 200);
//   });
// });



$('.sing_in').click(function(e) {
    e.preventDefault();
    $('.popup').fadeIn(100);
    $('html').addClass('no-scroll');
});

$('.background').click(function() {
    $('.popup').fadeOut(100);
    $('html').removeClass('no-scroll');
});
