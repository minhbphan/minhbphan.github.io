//--------------!!!!!Intro space!!!!!----------
var mathButton = document.getElementById('algoButton')
var mathSpace = document.getElementById('algoSpace')
mathButton.addEventListener("click", function() {
  if (mathButton.innerHTML == "See The Algorithm") {
    mathSpace.style.display = 'block'
    mathButton.innerHTML = "Hide The Algorithm"
  } else {
    mathSpace.style.display = 'none'
    mathButton.innerHTML = "See The Algorithm"
  }
})

//--------------!!!!!HOME SCREEN!!!!!----------
//home screen
var presetButton = document.getElementById('toPreset')
presetButton.addEventListener("click", function() {
  document.getElementById('preset').style.display = 'block'
  document.getElementById('home').style.display = 'none'
})

//tutorial slides
var slideIndex = 0
var slideImages = []
slideImages[0] = "tutorial/slide1.png"
slideImages[1] = "tutorial/slide2.png"
slideImages[2] = "tutorial/slide3.png"
slideImages[3] = "tutorial/slide4.png"
slideImages[4] = "tutorial/slide5.png"
slideImages[5] = "tutorial/slide6.png"
slideImages[6] = "tutorial/slide7.png"
slideImages[7] = "tutorial/slide8.png"
slideImages[8] = "tutorial/slide9.png"

//instructions screen and back
var progess = document.getElementById('slideProgress')
var instructionsButton = document.getElementById('toInstructions')
toInstructions.addEventListener("click", function() {
  document.getElementById('instructions').style.display = 'block'
  document.getElementById('home').style.display = 'none'
  slideIndex = 0
  prevSlide.disabled = true
  //nextSlide.disabled = false
  nextSlide.innerHTML = "Next"
  document.slide.src = slideImages[slideIndex]
  progess.innerHTML = "Slide " + (slideIndex+1) + "/9"
})
var instructHome = document.getElementById('instructionsHome')
instructHome.addEventListener("click", function() {
  document.getElementById('instructions').style.display = 'none'
  document.getElementById('home').style.display = 'block'
})

//prev and next slide buttons
var prevSlide = document.getElementById('previous')
prevSlide.addEventListener("click", function() {
  prevSlide.disabled = false
  //nextSlide.disabled = false
  slideIndex--
  if (slideIndex == 0) {  ////at first tutorial slide
    prevSlide.disabled = true
  }
  if (slideIndex != slideImages.length - 1) {
    nextSlide.innerHTML = "Next"
  }
  document.slide.src = slideImages[slideIndex]
  progess.innerHTML = "Slide " + (slideIndex+1) + "/9"
})

var nextSlide = document.getElementById('next')
nextSlide.addEventListener("click", function() {
  if (slideIndex == slideImages.length - 1) {   //switches to preset screen
    document.getElementById('preset').style.display = 'block'
    document.getElementById('instructions').style.display = 'none'
  }
  prevSlide.disabled = false
  //nextSlide.disabled = false
  slideIndex++
  if (slideIndex == slideImages.length - 1) { //at last tutorial slide
    nextSlide.innerHTML = "Start Game"
  } else {
    nextSlide.innerHTML = "Next"
  }
  document.slide.src = slideImages[slideIndex]
  progess.innerHTML = "Slide " + (slideIndex+1) + "/9"
})

//credits screen and back
var creditsButton = document.getElementById('toCredits')
creditsButton.addEventListener("click", function() {
  document.getElementById('credits').style.display = 'block'
  document.getElementById('home').style.display = 'none'
})
var credHome = document.getElementById('creditsHome')
credHome.addEventListener("click", function() {
  document.getElementById('credits').style.display = 'none'
  document.getElementById('home').style.display = 'block'
})

//--------------!!!!!PRESETTING VALUES!!!!!----------
//----trivia questions
const reg = [
  {
    question: "What Disney princess fell into a deep slumber because she bit a poisonous apple?",
    choices: "\n(a) Snow White\n(b) Sleeping Beauty\n(c) Cinderella\n(d) Belle",
    answer: "a",
    corChoice: "Snow White"
  },
  {
    question: "Who is kept away when an apple is eaten once a day?",
    choices: "\n(a) Professor\n(b) Doctor\n(c) Chef\n(d) Farmer",
    answer: "b",
    corChoice: "Doctor"
  },
  {
    question: "Which type of apple is typically green and often used in making pies?",
    choices: "\n(a) Gala\n(b) Braeburn\n(c) Fuji\n(d) Granny Smith",
    answer: "d",
    corChoice: "Granny Smith"
  },
  {
    question: "In the Bible, who bites the apple in the Garden of Eden?",
    choices: "\n(a) Eve\n(b) Adam\n(c) Lilith\n(d) Satan",
    answer: "a",
    corChoice: "Eve"
  },
  {
    question: "What is the popular carnival game involving apples?",
    choices: "\n(a) Apple carving\n(b) Bobbing for apples\n(c) Pin the apple\n(d) Apple maze",
    answer: "b",
    corChoice: "Bobbing for apples"
  },
  {
    question: "Where is most of the fiber located in an apple?",
    choices: "\n(a) Skin\n(b) Inner flesh\n(c) Core\n(d) Seed",
    answer: "a",
    corChoice: "Skin"
  },
  {
    question: "How many letters are there in the word 'apple'?",
    choices: "\n(a) 4\n(b) 8\n(c) 5\n(d) 7",
    answer: "c",
    corChoice: "5"
  },
  {
    question: "What color is the apple usually depicted as in pop culture?",
    choices: "\n(a) Blue\n(b) Yellow\n(c) Red\n(d) Orange",
    answer: "c",
    corChoice: "Red"
  },
  {
    question: "What do apples grow on?",
    choices: "\n(a) Bushes\n(b) Ground\n(c) Trees\n(d) Other",
    answer: "c",
    corChoice:"Trees"
  },
  {
    question: "What are apples covered in to make a popular sweet treat?",
    choices: "\n(a) Fudge\n(b) Marshmallow\n(c) Chocolate\n(d) Caramel",
    answer: "d",
    corChoice: "Caramel"
  },
]
const regEncoded = [
  {
    question: "Wat disny princs fl int ay dip slumbr bcaus $ bit ay pisnus apl",
    choices: "\n(a) Snow White\n(b) Sleeping Beauty\n(c) Cinderella\n(d) Belle",
    answer: "a"
  },
  {
    question: "W is cpt away wn an apl is itn wns ay day",
    choices: "\n(a) Professor\n(b) Doctor\n(c) Chef\n(d) Farmer",
    answer: "b"
  },
  {
    question: "Wi¢ typ awf apl is typicali grin and ftn usd in macng pis",
    choices: "\n(a) Gala\n(b) Braeburn\n(c) Fuji\n(d) Granny Smith",
    answer: "d"
  },
  {
    question: "In z bibl w bits z apl in z gardn awf dn",
    choices: "\n(a) Eve\n(b) Adam\n(c) Lilith\n(d) Satan",
    answer: "a"
  },
  {
    question: "Wat is z ppular carnival gam invlvng apls",
    choices: "\n(a) Apple carving\n(b) Bobbing for apples\n(c) Pin the apple\n(d) Apple maze",
    answer: "b"
  },
  {
    question: "Wr is mst awf z fibr lcatd in an apl",
    choices: "\n(a) Skin\n(b) Inner flesh\n(c) Core\n(d) Seed",
    answer: "a"
  },
  {
    question: "Hw many ltrs ar zr in z wrd 'apl'",
    choices: "\n(a) 4\n(b) 8\n(c) 5\n(d) 7",
    answer: "c"
  },
  {
    question: "Wat clr is z apl usuali dpictd as in pp cultur",
    choices: "\n(a) Blue\n(b) Yellow\n(c) Red\n(d) Orange",
    answer: "c"
  },
  {
    question: "Wat d apls grw awn",
    choices: "\n(a) Bushes\n(b) Ground\n(c) Trees\n(d) Other",
    answer: "c"
  },
  {
    question: "Wat ar apls cvrd in tu mayc ay ppular swit trat",
    choices: "\n(a) Fudge\n(b) Marshmallow\n(c) Chocolate\n(d) Caramel",
    answer: "d"
  },
]
const hard = [
  {
    question: "What is the science of growing apples called?",
    choices: "\n(a) Pomology\n(b) Redology\n(c) Taology\n(d) Fructology",
    answer: "a",
    corChoice: "Pomology"
  },
  {
    question: "What state is the number one producer of apples in the U.S.?",
    choices: "\n(a) New York\n(b) Wyoming\n(c) Washington\n(d) California",
    answer: "c",
    corChoice: "Washington"
  },
  {
    question: "What type of apple is native to America?",
    choices: "\n(a) Gala\n(b) Crabapple\n(c) Pink Lady\n(d) All of the above",
    answer: "b",
    corChoice: "Crabapple"
  },
  {
    question: "How many pounds of apples does the average person in the U.S. consume in a year?",
    choices: "\n(a) 19\n(b) 30\n(c) 10\n(d) 8",
    answer: "a",
    corChoice: "19"
  },
  {
    question: "Approximately how many varieties of apples are there in the world?",
    choices: "\n(a) 1000\n(b) 2500\n(c) 5000\n(d) 7500",
    answer: "d",
    corChoice: "7500"
  },
  {
    question: "What is another name given to apples in colonial times?",
    choices: "\n(a) Red potato\n(b) Eden fruit\n(c) Winter banana\n(d) Potato of the sky",
    answer: "c",
    corChoice: "Winter banana"
  },
  {
    question: "What did President George Washington enjoy doing with his apples?",
    choices: "\n(a) Pruning\n(b) Baking\n(c) Decorating\n(d) Eating plain",
    answer: "a",
    corChoice: "Pruning"
  },
  {
    question: "How many pounds of apples are needed to make one 9-inch pie?",
    choices: "\n(a) 0.5\n(b) 1\n(c) 3\n(d) 2",
    answer: "d",
    corChoice: "2"
  },
  {
    question: "Where were the first apple trees planted in the U.S.?",
    choices: "\n(a) Massachusetts Bay\n(b) Virginia\n(c) Connecticut\n(d) Other",
    answer: "a",
    corChoice: "Massachusetts Bay"
  },
  {
    question: "How old are apple trees when they produce their first fruit?",
    choices: "\n(a) 8-10 months\n(b) 4-5 years\n(c) 2-3 years\n(d) 7-8 years",
    answer: "b",
    corChoice: "4-5 years"
  },
]
const hardEncoded = [
  {
    question: "Wat is z scins awf grwng apls cald",
    choices: "\n(a) Pomology\n(b) Redology\n(c) Taology\n(d) Fructology",
    answer: "a"
  },
  {
    question: "Wat stayt is z numbr wn prducr awf apls in z u.S.",
    choices: "\n(a) New York\n(b) Wyoming\n(c) Washington\n(d) California",
    answer: "c"
  },
  {
    question: "Wat typ awf apl is nativ tu amrica",
    choices: "\n(a) Gala\n(b) Crabapple\n(c) Pink Lady\n(d) All of the above",
    answer: "b"
  },
  {
    question: "Hw many pawnds awf apls ds z avrag prsn in z u.S. cnsum in ay yar",
    choices: "\n(a) 19\n(b) 30\n(c) 10\n(d) 8",
    answer: "a"
  },
  {
    question: "Aprcsimatli hw many varitis awf apls ar zr in z wrld",
    choices: "\n(a) 1000\n(b) 2500\n(c) 5000\n(d) 7500",
    answer: "d"
  },
  {
    question: "Wat is anzr nam givn tu apls in clnial tims",
    choices: "\n(a) Red potato\n(b) Eden fruit\n(c) Winter banana\n(d) Potato of the sky",
    answer: "c"
  },
  {
    question: "Wat did prsidnt grg wa$ingtn njy dng wiz his apls",
    choices: "\n(a) Pruning\n(b) Baking\n(c) Decorating\n(d) Eating plain",
    answer: "a"
  },
  {
    question: "Hw many pawnds awf apls ar nidd tu mayc wn 9-in¢ pi?",
    choices: "\n(a) 0.5\n(b) 1\n(c) 3\n(d) 2",
    answer: "d"
  },
  {
    question: "Wr wr z frst apl tris plantd in z u.S.",
    choices: "\n(a) Massachusetts Bay\n(b) Virginia\n(c) Connecticut\n(d) Other",
    answer: "a"
  },
  {
    question: "Hw ld ar apl tris wn zy prdus zr frst fruit",
    choices: "\n(a) 8-10 months\n(b) 4-5 years\n(c) 2-3 years\n(d) 7-8 years",
    answer: "b"
  },
]

//---------P(Learn) Values
var pLearnParent = document.getElementById('pLearn-parent')
var learnCollection = pLearnParent.getElementsByClassName('pLearnButton')

var learnValue = 0.0
var regButton = learnCollection[0]
var hardButton = learnCollection[1]

regButton.addEventListener("click", function() {
  learnValue = 0.6
  resetPLearnButtons()
  this.disabled = true
})
hardButton.addEventListener("click", function() {
  learnValue = 0.4
  resetPLearnButtons()
  this.disabled = true
})

function resetPLearnButtons() {
  regButton.disabled = false
  hardButton.disabled = false
}

//---------P(Slip) Values
var pSlipParent = document.getElementById('pSlip-parent')
var slipCollection = pSlipParent.getElementsByClassName('pSlipButton')

var slipValue = 0.0
var lowSButton = slipCollection[0]
var medSButton = slipCollection[1]
var highSButton = slipCollection[2]

lowSButton.addEventListener("click", function() {
  slipValue = 0.1
  resetPSlipButtons()
  this.disabled = true
})
medSButton.addEventListener("click", function() {
  slipValue = 0.2
  resetPSlipButtons()
  this.disabled = true
})
highSButton.addEventListener("click", function() {
  slipValue = 0.3
  resetPSlipButtons()
  this.disabled = true
})

function resetPSlipButtons() {
  lowSButton.disabled = false
  medSButton.disabled = false
  highSButton.disabled = false
}

//---------P(Guess) Values
var pGuessParent = document.getElementById('pGuess-parent')
var guessCollection = pGuessParent.getElementsByClassName('pGuessButton')

var guessValue = 0.0
var lowGButton = guessCollection[0]
var medGButton = guessCollection[1]
var highGButton = guessCollection[2]

lowGButton.addEventListener("click", function() {
  guessValue = 0.1
  resetPGuessButtons()
  this.disabled = true
})
medGButton.addEventListener("click", function() {
  guessValue = 0.2
  resetPGuessButtons()
  this.disabled = true
})
highGButton.addEventListener("click", function() {
  guessValue = 0.3
  resetPGuessButtons()
  this.disabled = true
})

function resetPGuessButtons() {
  lowGButton.disabled = false
  medGButton.disabled = false
  highGButton.disabled = false
}

//--------goes back to home scene
var backHomeButton = document.getElementById('backHome')
backHomeButton.addEventListener("click", quitGame)

function quitGame() {
  document.getElementById('home').style.display = 'block'
  document.getElementById('preset').style.display = 'none'
  document.getElementById('mainGame').style.display = 'none'
  resetPLearnButtons()
  resetPSlipButtons()
  resetPGuessButtons()
  startButton.disabled = false
  triviaNum.sort((a,b) => 0.5-Math.random())
  temp = 0
  currentQuestion = triviaNum[temp]
  currentQuestion = 0
  knowValue = 0.2
  learnValue = 0.0
  slipValue = 0.0
  guessValue = 0.0
}

//--------starts main gameplay
var startButton = document.getElementById('startGame')
startButton.addEventListener("click", function() {
  if (learnValue != 0 && slipValue != 0 && guessValue != 0) {
    // window.alert("Your P(Learn) is " + learnValue + ", P(Slip) is " + slipValue + ", and P(Guess) is " + guessValue)
    document.getElementById('mainGame').style.display = 'block'
    document.getElementById('preset').style.display = 'none'
    firstQuestion()
  } else {
    window.alert("You need to choose a difficulty setting and values for P(Slip) and P(Guess)!")
  }
})

//--------------!!!!!START OF MAIN GAMEPLAY!!!!!----------
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

var treeImage = document.getElementById('tree')
var splatSound = new sound("sounds/splat.mp3")
var correctSound = new sound("sounds/correct.mp3")
var errorSound = new sound("sounds/error.mp3")
var gameOverSound = new sound("sounds/gameOver.mp3")
var cheerSound = new sound("sounds/cheer.mp3")
var slipSound = new sound("sounds/slip.mp3")

const triviaNum = [0,1,2,3,4,5,6,7,8,9]
triviaNum.sort((a,b) => 0.5-Math.random())    //randomizes questions
var temp = 0
var currentQuestion = triviaNum[temp]
var knowValue = 0.2

var pKnowSpace = document.getElementById('pKnow')
var questionSpace = document.getElementById('questions')
var choiceSpace = document.getElementById('choices')
var chanceSpace = document.getElementById('chances')

var buttonParent = document.getElementById('mainGame')
var choiceCollection = buttonParent.getElementsByClassName('answerChoice')
var buttonA = choiceCollection[0]
var buttonB = choiceCollection[1]
var buttonC = choiceCollection[2]
var buttonD = choiceCollection[3]

//------Resets values and hides gameplay area for next preset and game
var quitButton = document.getElementById('quit')
quitButton.addEventListener("click", quitGame)

function firstQuestion() {    //loads first question
  treeImage.src = 'graphics/appleTree.png'
  if (learnValue == 0.6) {    //regular version
      questionSpace.innerHTML = reg[currentQuestion].question
      choiceSpace.innerHTML = reg[currentQuestion].choices
  } else {    //hard version
      questionSpace.innerHTML = hard[currentQuestion].question
      choiceSpace.innerHTML = hard[currentQuestion].choices
  }
  pKnowSpace.innerHTML = "P(Know): " + knowValue
  chanceSpace.innerHTML = "Chances Remaining: " + (10-temp)
  //enables all answer choices
  buttonA.disabled = false;
  buttonB.disabled = false;
  buttonC.disabled = false;
  buttonD.disabled = false;
}

//-----checks if answered correctly and updates question
buttonA.addEventListener("click", function() {
  checkAnswer('a')
})
buttonB.addEventListener("click", function() {
  checkAnswer('b')
})
buttonC.addEventListener("click", function() {
  checkAnswer('c')
})
buttonD.addEventListener("click", function() {
  checkAnswer('d')
})

//--------helper function to check player's answer
function checkAnswer(choiceLetter) {
  if (learnValue == 0.6) {
    if (reg[currentQuestion].answer == choiceLetter) {
      if (Math.random() <= slipValue) {
        slipSound.play()
        splatSound.play()
        treeImage.src = 'graphics/tease.gif'
        questionSpace.innerHTML = "Oops! You got it right but the apple is rotten"
        choiceSpace.innerHTML = ''
        updatePKnow(false)
      } else {
        correctSound.play()
        splatSound.play()
        treeImage.src = 'graphics/happy.gif'
        questionSpace.innerHTML = "Correct!"
        choiceSpace.innerHTML = ''
        updatePKnow(true)
      }
    } else {
      errorSound.play()
      treeImage.src = 'graphics/sad.png'
      questionSpace.innerHTML = "Incorrect! The correct answer is " + reg[currentQuestion].corChoice
      choiceSpace.innerHTML = ''
      updatePKnow(false)
    }
  } else if (learnValue == 0.4) {
    if (hard[currentQuestion].answer == choiceLetter) {
      if (Math.random() <= slipValue) {
        slipSound.play()
        splatSound.play()
        treeImage.src = 'graphics/tease.gif'
        questionSpace.innerHTML = "Oops! You got it right but the apple is rotten"
        choiceSpace.innerHTML = ''
        updatePKnow(false)
      } else {
        correctSound.play()
        splatSound.play()
        treeImage.src = 'graphics/happy.gif'
        questionSpace.innerHTML = "Correct!"
        choiceSpace.innerHTML = ''
        updatePKnow(true)
      }
    } else {
      errorSound.play()
      treeImage.src = 'graphics/sad.png'
      questionSpace.innerHTML = "Incorrect! The correct answer is " + hard[currentQuestion].corChoice
      choiceSpace.innerHTML = ''
      updatePKnow(false)
    }
  }
  setTimeout(nextQuestion, 2500)
}

function updatePKnow(correct) {
  knowValue_c = 1.0 - knowValue
  learnValue_c = 1.0 - learnValue
  slipValue_c = 1.0 - slipValue
  guessValue_c = 1.0 - guessValue

  if (correct) {    //if answered correctly
    var r = (knowValue * slipValue_c) / ((knowValue * slipValue_c) + (knowValue_c * guessValue))
    knowValue = r + ((1.0 - r) * learnValue)
  } else {    //if answered incorrectly
    var w = (knowValue * slipValue) / ((knowValue * slipValue) + (knowValue_c * guessValue_c))
    knowValue =  w + (1.0 - w) * learnValue
  }
  pKnowSpace.innerHTML = "P(Know): " + knowValue.toFixed(2)
}

//--------helper function to update the question asked
function nextQuestion() {
  if (knowValue >= 0.95 || temp == 9) {   //reaches mastery or no more questions
    endGame()
  } else {
    temp++
    chanceSpace.innerHTML = "Chances Remaining: " + (10-temp)
    currentQuestion = triviaNum[temp]
    treeImage.src = 'graphics/appleTree.png'
    if (learnValue == 0.6) {    //regular version
      if (Math.random() <= guessValue) {
        questionSpace.innerHTML = regEncoded[currentQuestion].question
        choiceSpace.innerHTML = regEncoded[currentQuestion].choices
      } else {
        questionSpace.innerHTML = reg[currentQuestion].question
        choiceSpace.innerHTML = reg[currentQuestion].choices
      }
    } else {    //hard version
      if (Math.random() <= guessValue) {
        questionSpace.innerHTML = hardEncoded[currentQuestion].question
        choiceSpace.innerHTML = hardEncoded[currentQuestion].choices
      } else {
        questionSpace.innerHTML = hard[currentQuestion].question
        choiceSpace.innerHTML = hard[currentQuestion].choices
      }
    }
  }
}

//------Game ends
function endGame() {
  temp++
  chanceSpace.innerHTML = "Chances Remaining: " + (10-temp)
  if (knowValue >= 0.95) {   //at mastery
    treeImage.src = 'graphics/excited.png'
    cheerSound.play()
    questionSpace.innerHTML = "Congrats! You've mastered apple picking! Go bake a pie :)"
  } else {    //ran out of questions
    treeImage.src = 'graphics/degenerate.png'
    gameOverSound.play()
    questionSpace.innerHTML = "Oh no, you've ran out of chances! Better luck next time :("
  }
  choiceSpace.innerHTML = ""
  //disables answer choices
  buttonA.disabled = true;
  buttonB.disabled = true;
  buttonC.disabled = true;
  buttonD.disabled = true;
}
