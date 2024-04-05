(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' },
            { src: 'images/slide-image03.jpg' },
            { src: 'images/slide-image04.jpg' },
            { src: 'images/slide-image05.jpg' },
            // { src: 'images/slide-image06.jpg' },
            // { src: 'images/slide-image07.png' },
            // { src: 'images/slide-image08.jpg' },
        ],
        timer: false
    });

    // Countdown function
    function countdown() {
        const targetDate = new Date('April 29, 2024 00:00:00 GMT+0700');
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            // Target date has passed
            document.querySelectorAll('.countdown span').forEach(span => span.textContent = '0');
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelector('.countdown .days').textContent = days;
        document.querySelector('.countdown .hours').textContent = hours;
        document.querySelector('.countdown .minutes').textContent = minutes;
        document.querySelector('.countdown .seconds').textContent = seconds;

        setTimeout(countdown, 1000);
    }

    // Start the countdown
    countdown();

})(jQuery);

function handleSearch() {
  const searchInput = document.getElementById('searchInput').value.trim();

  // Check if the input is a URL
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  if (urlPattern.test(searchInput)) {
    window.location.href = searchInput.startsWith('http') ? searchInput : `https://${searchInput}`;
  } else {
    const searchQuery = encodeURIComponent(searchInput);
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  }
}