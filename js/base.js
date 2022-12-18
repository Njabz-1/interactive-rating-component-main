function hideAndReveal() {
    document.getElementById("hideMe").style.display = "none";
    document.getElementById("revealMe").style.display = "flex";
  }
  
  document.getElementById("submit").addEventListener("click", hideAndReveal);

//Fill an empty span with id `rating` with the number that a user clicks on. the user may click on one of five divs each with id's ranging from one to five

function setRating(rating) {
    document.getElementById("rating").innerHTML = rating;
  }
