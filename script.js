$(document).ready(function(){

var magic8ball = {};
magic8ball.answers = ["It is certain", "It is decidedly so", "Without a doubt", "You may rely on it", "As I see it", "Most likely", "Outlook good", "Yes", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Very doubtful"];

$("#answer").hide();

magic8ball.askQuestion = function(question){
        $("#8ball").effect("shake");
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

		$("#answer").fadeIn(4000);
		var randomNumber = Math.random();
	 	var randomNumberForAnswers = randomNumber * this.answers.length;
		var randomIndex = Math.floor(randomNumberForAnswers);
		var answer = this.answers[randomIndex];

 		$("#answer").text(answer);
		console.log(question);
		console.log(answer);
 };
	/*$("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
*/
    var onClick = function() {
         setTimeout(
            function() {
                var question = prompt("ASK A YES/NO QUESTION!");
                magic8ball.askQuestion(question);
}, 500);
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

};

    $("#questionButton").click( onClick );
});
