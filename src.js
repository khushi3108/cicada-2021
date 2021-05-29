

// Creating questionss and answers
//*****************************************************************************
var question1 = {
    question: "It's OK to stick with a low-carb diet during pregnancy. True or false?",
    answers: ["True", "False"],
    help:"This is no time to stick to a weight-loss diet, and it's certainly no time miss out on the vitamins, minerals, and fiber found in whole wheat bread or a bowl of cereal. According to the U.S.D.A.'s food pyramid, pregnant women should aim for about 6 to 9 ounces a day of whole grains, enriched breads, or enriched cereal every day",
    correct: 0
  };

var question2 = {
    question: "Folic acid is only important during the last few weeks of pregnancy. True or false?",
    answers: ["True", "False"],
    help:"Folic acid helps prevent birth defects during the first few weeks of development and continues to play an important role through most of pregnancy. Since you may not even know you're pregnant during the early critical weeks, it makes sense to start taking extra folic acid before you become pregnant. ",
    correct: 1
  };

var question3 = {
    question: "If you had a healthy weight when you got pregnant, how much weight should you expect to gain before your baby's born?",
    answers: ['10 to 15 pounds', '15 to 20 pounds', '20 to 25 pounds', '25 to 35 pounds'],
    help:"A moderate weight gain will help ensure that your baby is born healthy and on schedule. If you were overweight before pregnancy, you should aim for a weight gain of 15 to 25 pounds. ",
    correct: 3
  }

var question4 = {
    question: "Which of the following foods should you avoid during pregnancy?",
    answers: [" Cold deli meats", "Alfalfa sprouts", "Soft cheeses made with unpasteurized milk","Sushi","All of above"],
    help:"ld deli meats (such as turkey, ham and hot dogs) and unpasteurized soft cheeses (such as feta, brie and Camembert) could potentially carry dangerous listeria bacteria. Don't eat lunch meats unless they're steaming hot, and look for the word pasteurized on all soft cheeses. Sprouts and other raw produce (and unpasteurized juices) may carry salmonella or E. coli bacteria, so be extra careful when washing them or only eat them cooked.",
    correct: 4
  };

var question5 = {
    question: "To get enough calcium, how many servings of dairy should you have each day?",
    answers: ["Two", "Four","Six","None, you should avoid dairy during pregnancy"],
    help:"You'll need about 1,200 milligrams of calcium every day to help your baby grow while keeping your own bones strong. If you're lactose intolerant, look for low-lactose or reduced lactose products. If you're a vegan or have another reason for avoiding dairy products, make sure you load up on calcium-rich foods like dark leafy greens, tofu, and calcium-fortified orange juice. If you're not getting enough, your doctor may recommend calcium supplements",
    correct: 1
  };

var question6 = {
    question: "It's okay to have a glass of wine now and then when I'm pregnant. True or false?",
    answers: ["True","False"],
    help:"Despite what they might do in Europe, there is no safe amount of alcohol during pregnancy, and there is no time during your pregnancy when it is okay to drink. Heavy drinking can result in a condition known as fetal alcohol syndrome, which causes severe and lasting brain damage, and even light drinking during pregnancy has been linked to learning disabilities. ",
    correct: 1
  };

var question7 = {
    question: "How many calories should you eat each day during pregnancy?",
    answers: ["2,400 or less", "2,200 to 2,900","More than 3,000","Double your usual calories"],
    help:"Eating for two doesn't mean you need a lot of extra calories. During the first trimester you don't need any more than usual, and during the second and third trimesters you only need an additional 300 calories a day. The American Dietetic Association recommends that pregnant women eat a total of 2,200 to 2,900 calories per day, but your needs may be higher or lower based on your weight and activity level.",
    correct: 1
  };

// create an array of objects

var questions = [question1,question2,question3,question4,question5,question6,question7,];

// Initialize variables
//------------------------------------------------------------------

var tags;
var tagsClass = '';
var liTagsid = [];
var correctAns = 0;
var quizPage = 1;


var currentIndex = 0;
var currentQuestion = questions[currentIndex];

var prevousQuestion;
var previousIndex = 0;

var ulTag = document.getElementsByTagName('ul')[0];
var button = document.getElementById('submit');
var questionTitle = document.getElementById('question');
var help =  document.getElementById('helparea');

//save class name so it can be reused easily
//if I want to change it, I have to change it one place
var classHighlight = 'selected';


// Display Answers and hightlight selected item
//------------------------------------------------------------------
function showQuestions (){

if (currentIndex != 0) {
// create again submit button only for next pages
ulTag.innerHTML ='';
button.innerHTML = 'Submit';
button.className = 'submit';
button.id = 'submit';

//update the number of questions displayed
document.getElementById('quizNumber').innerHTML = quizPage;
}

//Display Results in the final page
if (currentIndex ==  (questions.length)) {
ulTag.innerHTML = '';
document.getElementById('question').innerHTML = '';

showResults();

return
}

questionTitle.innerHTML = currentQuestion.question;
console.log(currentQuestion.question);

// create a for loop to generate the answers and display them in the page
for (var i = 0; i < currentQuestion.answers.length; i++) {
// creating answers
var newAns = document.createElement('li');
newAns.id = 'ans'+ (i+1);
newAns.className = "notSelected";
var textAns = document.createTextNode(currentQuestion.answers[i]);
newAns.appendChild(textAns);
var addNewAnsHere = document.getElementById('answer');
addNewAnsHere.appendChild(newAns);

console.log(currentQuestion.answers[i]);
}


//.click() will return the result of $('.notSelected')
var $liTags = $('.notSelected').click(function(list) {
list.preventDefault();
//run removeClass on every element
//if the elements are not static, you might want to rerun $('.notSelected')
//instead of the saved $litTags
$liTags.removeClass(classHighlight);
//add the class to the currently clicked element (this)
$(this).addClass(classHighlight);

//get id name of clicked answer
for (var i = 0; i < currentQuestion.answers.length ; i++) {
// console.log(liTagsid[i]);
if($liTags[i].className == "notSelected selected"){
//store information to check answer
tags = $liTags[i].id;
// tagsClass = $LiTags.className;
console.log(tags);
tagsClassName = $liTags[i];
}
}
});

//check answer once it has been submitted
button.onclick = function (){ checkAnswer()};
}

//self calling function
showQuestions();


// Show Correct Answer
//------------------------------------------------------------------
function checkAnswer (){
// get selected list
var selectedItem = document.getElementById(tags);

// check that an answer has been selected
if (selectedItem == undefined) {
alert("Please selected an answer!")
return
} else {
// get user answer if form of text
var userAns = selectedItem.innerHTML;
}

// change the background of the answer according to the Results
if (userAns == currentQuestion.answers[currentQuestion.correct]) {
console.log("Correct! The answer is: "+ userAns);
// change color of selected item by changing className
selectedItem.className = 'correct';
helparea.className ='HelpShow';
helparea.innerHTML= currentQuestion.help;
// count the number of correct answers
correctAns++;
console.log(correctAns);
} else {
console.log("Wrong! The corrent answer is: "+  currentQuestion.answers[currentQuestion.correct]);
//change the background of the wrong answer
selectedItem.className = 'wrong';
helparea.className ='HelpShow';
helparea.innerHTML= currentQuestion.help;
//hightlight the right answer if the user got it wrong
//change the class name of the correct answer
ulTag.getElementsByTagName('li')[currentQuestion.correct].className = 'correct';

console.log(currentQuestion.answers[currentQuestion.correct]);
}

// Create a next Question button once the answer has been submitted
button.innerHTML = 'Next Question';
button.className = 'next';
button.id = 'next';

prevousQuestion = currentQuestion;

quizPage++;
currentIndex++;
currentQuestion = questions[currentIndex];

// Start with the next question once the "Next" button has been clicked
button.onclick = function (){showQuestions()
  helparea.className ='Help';};
return
}

// Final score
//------------------------------------------------------------------
function showResults () {
//deleting page number
document.getElementById('pages').innerHTML='';

// Change Title
questionTitle.innerHTML = '<h1>Your Score</h1>';

// Get the area that will be used to display the user's score
var newInfo = document.getElementById('quiz-results');
//Change the id and className of the area for the circle
newInfo.innerHTML = '';
newInfo.id = 'circle';
newInfo.className = 'circle';


//Create a Div for the fill element
var newDiv = document.createElement('div');
newDiv.className = 'fill';
var addHere = document.getElementById('circle');
addHere.appendChild(newDiv);

// add the score to the circle
var newScore = document.createElement('h3');
newScore.className = 'score';
var textScore = document.createTextNode(Math.floor((correctAns/questions.length)*100) + '%');
newScore.appendChild(textScore);
addHere.appendChild(newScore);

//use jquary to grab the text of the score
var score = $(".score").text();

//fill the circle in base of the score
$(".fill").css("height",score);

if (correctAns >= 5) {
var newCongrats = document.createElement('p');
var textCongrats = document.createTextNode('Congratulations! You did a Good Job!')
newCongrats.appendChild(textCongrats);
document.getElementById('display-area').appendChild(newCongrats);

confettiEffect();
}

}

// Confetti Effect by Gtibo "Confetti Party"
//------------------------------------------------------------------
function confettiEffect (){
//grabing area to create the effect
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

// creating the tabel
particle = [];
particleCount = 0,
gravity = 0.3,
colors = [
'#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
'#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
'#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
'#FF5722', '#795548'
];

for( var i = 0; i < 300; i++){

particle.push({
x : width/2,
y : height/2,
boxW : randomRange(5,20),
boxH : randomRange(5,20),
size : randomRange(2,8),

spikeran:randomRange(3,5),

velX :randomRange(-8,8),
velY :randomRange(-50,-10),

angle :convertToRadians(randomRange(0,360)),
color:colors[Math.floor(Math.random() * colors.length)],
anglespin:randomRange(-0.2,0.2),

draw : function(){
context.save();
context.translate(this.x,this.y);
context.rotate(this.angle);
context.fillStyle=this.color;
context.beginPath();

context.fillRect(this.boxW/2*-1,this.boxH/2*-1,this.boxW,this.boxH);
context.fill();
  context.closePath();
context.restore();
this.angle += this.anglespin;
this.velY*= 0.999;
this.velY += 0.3;

this.x += this.velX;
this.y += this.velY;

if(this.y < 0){
this.velY *= -0.2;
 this.velX *= 0.9;
};

if(this.y > height){
this.anglespin = 0;
this.y = height;
this.velY *= -0.2;
this.velX *= 0.9;
};

if(this.x > width ||this.x< 0){
this.velX *= -0.5;
};
},
});
}

function drawScreen(){
context.globalAlpha = 1;
for( var i = 0; i < particle.length; i++){
  particle[i].draw();
}
}

function loadImage(url){
var img = document.createElement("img");
img.src=url;
return img;
}

function update(){
context.clearRect(0,0,width,height);
drawScreen();
requestAnimationFrame(update);
}

update();

function randomRange(min, max){
return min + Math.random() * (max - min );
}

function randomInt(min, max){
return Math.floor(min + Math.random()* (max - min + 1));
}

function convertToRadians(degree) {
return degree*(Math.PI/180);
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius,color) {
var rot = Math.PI / 2 * 3;
var x = cx;
var y = cy;
var step = Math.PI / spikes;

context.strokeSyle = "#000";
context.beginPath();
context.moveTo(cx, cy - outerRadius)
for (i = 0; i < spikes; i++) {
x = cx + Math.cos(rot) * outerRadius;
y = cy + Math.sin(rot) * outerRadius;
context.lineTo(x, y)
rot += step

x = cx + Math.cos(rot) * innerRadius;
y = cy + Math.sin(rot) * innerRadius;
context.lineTo(x, y)
rot += step
}

context.lineTo(cx, cy - outerRadius)
context.closePath();
context.fillStyle = color;
context.fill();

}
}
