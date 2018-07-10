var Mass = ['1 Question', '2 Question', '3 Question'];

var Answers = ['1','2','3'];

var Result = document.getElementById("result");

var div = document.createElement('div');

function Start () {

    for(var i=0;i<Mass.length;i++) {
        var answer = prompt(Mass[i]);
        Result.innerHTML += "<div class='item item" + i + "'>" + answer + "</div>";

        if (answer == Answers[i]) {
            Result.innerHTML += "<div class='answer answer" + "-true" + "'>" + "верно" + "</div>";
        } else {
            Result.innerHTML += "<div class='answer answer" + "-false" + "'>" + "неверно" + "</div>";
        }

    }
}
// function fun1() {
//     var Start = Answers.style
//     Answers.textAlign = 'center';
//     Answers.marginTop = 50px;
//     Answers.marginLeft = 100px;
//     Answers.display = 'block';
//     Answers.color = '#fff';
//     Answers.justifyContent = 'center';
//     Answers.alignItems = 'center';

// var div = document.body.children[2];
// }


$(".ripple").on("click",function(event){
$(this).append("<span class='ripple-effect'>");
$(this).find(".ripple-effect").css({
   left:event.pageX-$(this).position().left,
    top:event.pageY-$(this).position().top
  }).animate({
    opacity: 0,
  }, 1500, function() {
   $(this).remove();
  });
});
