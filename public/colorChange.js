window.addEventListener('scroll', function() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      var divs = document.querySelectorAll('.right1');
      var middleScreen = window.innerHeight / 2;
  
      divs.forEach(function(div) {
        var rect = div.getBoundingClientRect();
        if (rect.top <= middleScreen && rect.bottom >= middleScreen) {
          div.classList.add('mid-screen'); // Add class when in the middle of the screen
        } else {
          div.classList.remove('mid-screen'); // Remove class when not in the middle of the screen
        }
      });
    }
  });
  