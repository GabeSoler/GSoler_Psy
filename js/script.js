/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
    var el = document.getElementById("myTopnav");

    if (el.className === "topnav") {
      el.className += " responsive";
    } else {
      el.className = "topnav";
    }
  }




/* Creating a header that appears on scroll up */  
  var headerDiv = document.querySelector("header");
  var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
  var prevScrollpos = window.scrollY;


  window.onscroll = function() {
    var currentScrollPos = window.scrollY;
  
    /* if scrolling down, let it scroll out of view as normal */

    if (prevScrollpos < currentScrollPos && currentScrollPos > headerBottom){
        headerDiv.style.top ="-100px";
    }
    /* otherwise if we're scrolling up, fix the nav to the top */

    else{  
        headerDiv.style.top = '0';
    }
    
    prevScrollpos = currentScrollPos;
  } 


