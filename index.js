var readLineSync = require("readline-sync");
var score = 0;
const chalk = require('chalk');
var userName = readLineSync.question(chalk.bgBlackBright.green("Please Enter your name :"));

console.log(chalk.bgBlue.white("Hiiii ",userName,"!! Welome to JavaScript CLI Quiz ✨   created by Srikanth."));
console.log();
console.log("--------------------------------------");
console.log(chalk.underline.bgMagentaBright.white("RULES!  Choose the right option, if you choose the right answer you will score 1 point, if you choose wrong answer your score will be reduced by 1 "));
console.log("--------------------------------------");
console.log(chalk.green(" ALL THE BEST !!!"));
console.log("--------------------------------------");

//play fuction
 function play(question,answer)
 {
   var userAnswer = readLineSync.question(question);
   
   if(userAnswer.toUpperCase() === answer.toUpperCase())
   {
     score = score+1;
     console.log("You have entered option:",answer);
     console.log(chalk.bgBlackBright.green("Bravo, You are Right !!!"));
   }
     else
     {
       score = score-1;
console.log(chalk.bgBlack.red.inverse("Oops! your choice is Wrong !"));
console.log(chalk.bgGreen.black("The correct answer is: ",answer));
     }
      console.log("Your current score  :",score);
     console.log("+++++++++++++++++++++++++++++++");
 }
var questions = [
  {
   question:
    `Q1. What is the first movie of chiranjeevi ?
a: khaidi
b: stalin
c: tagore
d: pranam khareedu \n`,
answer:"D"
  },
  {
   question:
    `Q2. What is the 100th movie of chiranjeevi ?
a: indra 
b: Chakravarthy
c: Pasivadi pranam
d: kodandarami reddy \n`,
answer:"D"  
  },
  {
   question:
    `Q3. In which year Chiranjeevi awarded Padma Bhushan ?
a: 2006
b: 2004
c: 2002
d: 2000 \n`,
answer:"A"
  },
  {
   question:
    `Q4. what is the spouse name of Chiranjeevi ?
a: Swathi Konidala
b: Sharanya Konidala
c: Shirisha Konidala
d: Surekha Konidala \n`,
answer:"D"
  },
  {
   question:
    `Q5. In which year Hitler movie released  ?
a: 1997
b: 1998
c: 1996
d: 1995 \n`,
answer:"A"
  }
];
for(var j=0;j<questions.length;j++)
  {
    var currentQuestion = questions[j];
    play(currentQuestion.question, currentQuestion.answer)
  }
   console.log(chalk.bgMagentaBright.green("Yay!! YourTotal score  is : ",score,"/5"));
     console.log("+++++++++++++++++++++++++++++++");

  var highScore = [
       {
       name:"Srikanth",
       score: "5 points"
     },
     {
       name:"Sree",
       score:"4 Points"
     }
     ]
     for(var i=0;i<highScore.length;i++)
     {
       var newHigh = highScore[i];
       console.log(chalk.bgBlackBright.white("Top Place :",newHigh.name,"with",newHigh.score));
     }
     console.log();
     console.log(chalk.bgBlue.whiteBright("Thank You! Check out the high scores, if you should be there ping me and I'll update it!! "));