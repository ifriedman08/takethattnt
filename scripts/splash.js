$(window).load(function(){

  TTT.renderSplash = function(){
    $('#content').empty();
    var logo = $('<div class="logo">');
    var logoFooter = $('<div class="logo footer">');
    var fist1 = $('<img class="fist1" style="visibility:hidden" src="images/TAKE.png">');
    var fist2 = $('<img class="fist2" style="visibility:hidden" src="images/THAT.png">');
    var tnt = $('<h3 class="logo-footer" style="opacity:0">tartes & things</h3>');
    logo.append(fist1);
    logo.append(fist2);
    logoFooter.append(tnt);
    $('section#content').append(logo);
    $('section#content').append(logoFooter);
    setTimeout(function(){
      fist1.css({'visibility':'visible'})
    }, 400);

    setTimeout(function(){
      fist2.css({'visibility':'visible'})
    }, 800);

    setTimeout(function(){
      tnt.animate({'opacity': 1}, 1000)
    }, 1000);
  };

  TTT.renderSplash();

  TTT.fetchAbout = function () {
    $('#content').load('content/about.html', function(){
      $('.navbar-collapse.collapse.in').removeClass('in');
    })
  };

  TTT.fetchPricing = function () {
    $('#content').load('content/pricing.html', function(){
      $('.navbar-collapse.collapse.in').removeClass('in');
    })
  }

  TTT.fetchContact = function () {
    $('#content').load('content/contact.html', function(){
      $('.navbar-collapse.collapse.in').removeClass('in');
    })
  }

  $('a#pricing').click(function (event) {
    console.log('clicked pricing');
    TTT.fetchPricing();
  })

  $('a#contact').click(function (event) {
    console.log('clicked about');
    TTT.fetchAbout();
  })

  $('a#about').click(function (event) {
    console.log('clicked about');
    TTT.fetchAbout();
  })

  $('a.navbar-brand').click(function (event) {
    console.log('clicked brand');
    TTT.renderSplash();
  })
})
