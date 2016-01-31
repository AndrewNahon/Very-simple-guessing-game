$(function() {
  var number = Math.ceil(Math.random() * 100),
      guesses = 0;

  $("form").on("submit", function(e) {
    e.preventDefault();
        
    var guess = +$("input[type='number']").val(),
        $h2 = $("h2");

      if (guess === number) {
        guesses++;
        $h2.text("Congratulations! You got the right number in " + guesses + " guesses!");
        $("body").css("background", "red");
      }
      else if (guess < number) {
        guesses++;
        $h2.text("Sorry but " + guess + " is too low.")
      }
      else {
        guesses++;
        $h2.text("Sorry but " + guess + " is too high.")
      }

      $("a").on("click", function(e) {
        e.preventDefault();
        number = Math.ceil(Math.random() * 100),
        guesses = 0;
        $("body").css("background", "#fff");
        $("h2").text("Pick a number between 1 and 100 yo!");
      })
  });
});