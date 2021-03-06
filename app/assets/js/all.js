"use strict";

$(document).ready(function () {
  // hamburger menu button
  $(".navBtn").click(function (e) {
    e.preventDefault();
    $(".nav__list").toggleClass("active");
  });


  // go to top 
  $(".go-top").click(function (event) {
    $("html , body").animate({ scrollTop: 0 }, 700);
  });


  // parallax scrolling
  $(".scrollTop").click(function (event) {
    event.preventDefault();
    let target = $(this).attr("href");
    let targetPos = $(target).offset().top;
    $("html , body").animate({ scrollTop: targetPos }, 1000);
  });

  
});


// aos

AOS.init();