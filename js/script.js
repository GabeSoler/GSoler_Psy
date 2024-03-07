/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
    var el = document.getElementById("myTopnav");

    if (el.className === "topnav") {
      el.className += " responsive";
    } else {
      el.className = "topnav";
    }
  }


