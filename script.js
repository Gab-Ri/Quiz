var questions = [
    {
         prompt: "What is the largest empire in the history?\n(a) British Empire\n\ (b) Mongol Empire\n(c) Russian Empire",
         answer: "a"
    },
    {
         prompt: "What is the smallest country in the world?\n(a) San Marino\n\ (b) Monaco\n(c) Vatican City",
         answer: "c"
    },
    {
         prompt: "What is the highest mountain in the world?\n(a) Mount Everest\n\ (b) K2\n(c) Kangchenjunga",
         answer: "a"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);
