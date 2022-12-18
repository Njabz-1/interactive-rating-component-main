function hideAndReveal() {
    document.getElementById("hideMe").style.display = "none";
    document.getElementById("revealMe").style.display = "flex";
  }
  
  document.getElementById("submit").addEventListener("click", hideAndReveal);

function setRating(rating) {
    document.getElementById("rating").innerHTML = rating;
  }

  $(".number-box").click(function() {
    $(".number-box").removeClass("active");
    $(this).addClass("active");
  });
