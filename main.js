// ===== load-line start ===== 

window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ===== load-line End ===== 

// ===== heading text animation Start =====

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 8);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // change color for data-text
    this.txtElement.innerHTML = `<span class="txt" style="color: #14213D;">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// ===== heading text animation End =====

// ====== contect form validetion Start ====== 

$(document).ready(function () {
  $("#formvld").validate({
    rules: {
      name: {
        minlength: 2,
      },
      email: {
        email: true
      },
      phone: {
        number: true,
        minlength: 10,
        maxlength: 10
      },
      messages: {
        name: {
          required: "Required input",
          minlength: jQuery.validator.format("Please, at least {2} characters are necessary")
        },
        email: "please enter your email",
        phone: "please enter your phone"
      },

    },

    submitHandler: function (form) {
      form.submit();
    }
  });
})

// ====== contect form validetion End ====== 

// ====== scroll navbar background & color change Start =====

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".mainnvbr").css("background", "#000000bd",);
      $(".brc").css("color", "white");
    }

    else {
      $(".mainnvbr").css("background", "#F5F5F5");
      $(".brc").css("color", "black");

    }
  })
});

// ====== scroll navbar background & color change End =====

// ==== back to top button start =====

$(function () {

  //Scroll event
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });

  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });

});


// ======================== 

