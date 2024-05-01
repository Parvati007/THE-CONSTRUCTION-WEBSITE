let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

// function validateForm() {
//    var email = document.getElementById("email").value;
//    var password = document.getElementById("password").value;

//    if (email.trim() == "") {
//        alert("Please enter your email.");
//        return false;
//    }
//    if (password.trim() == "") {
//        alert("Please enter your password.");
//        return false;
//    }
//    // Add more validation rules as needed

//    // If all validations pass, return true
//    return true;
// }

function validateForm() {
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;

   if (email.trim() == "") {
       alert("Please enter your email.");
       return false;
   }
   if (password.trim() == "") {
       alert("Please enter your password.");
       return false;
   }
   if (password.length < 8) {
       alert("Password must be at least 8 characters long.");
       return false;
   }
   if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
       alert("Password must contain at least one special character.");
       return false;
   }
   if (!/\d/.test(password)) {
       alert("Password must contain at least one number.");
       return false;
   }
   // Add more validation rules as needed

   // If all validations pass, return true
   return true;
}

function validateForm() {
   var name = document.querySelector('.contact input[name="name"]').value;
   var email = document.querySelector('.contact input[name="email"]').value;
   var phone = document.querySelector('.contact input[name="phone"]').value;
   var message = document.querySelector('.contact textarea[name="message"]').value;

   // Simple validation: check if fields are empty
   if (name.trim() == '') {
       alert('Please enter your name.');
       return false;
   }
   if (email.trim() == '') {
       alert('Please enter your email.');
       return false;
   }
   if (phone.trim() == '') {
       alert('Please enter your phone number.');
       return false;
   }
   if (message.trim() == '') {
       alert('Please enter your message.');
       return false;
   }

   // Additional validation can be added here

   // If all validations pass, return true
   return true;
}



