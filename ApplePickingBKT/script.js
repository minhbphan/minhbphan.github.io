//--------------!!!!!Intro space!!!!!----------
var mathButton = document.getElementById('algoButton')
var mathSpace = document.getElementById('algoSpace')
mathButton.addEventListener("click", function() {
  if (mathButton.innerHTML == "How Is It Calculated?") {
    mathSpace.style.display = 'block'
    mathButton.innerHTML = "Hide The Algorithm"
  } else {
    mathSpace.style.display = 'none'
    mathButton.innerHTML = "How Is It Calculated?"
  }
})

//--------------!!!!!HOME SCREEN!!!!!----------
//home screen
var presetButton = document.getElementById('toPreset')
presetButton.addEventListener("click", function() {
  document.getElementById('preset').style.display = 'block'
  document.getElementById('home').style.display = 'none'
})

// //tutorial slides
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
    choices: "\n(a) 4\n(b) 8\n(c) 5\n(d) 10",
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
    question: "Haxat Isnoupp plincopt borr dinke pit pour trumfol focaxauso sko fit pit deiseneus axappro?",
    choices: "\n(a) Sned Hito\n(b) Troopick Foaxautupp\n(c) Cictolorraxa\n(d) Forro",
    answer: "a",
    corChoice: "Sned Hito"
  },
  {
    question: "He dis goss axawaxaupp hon up axappro dis oaxaton enco pit daxaupp?",
    choices: "\n(a) Plebossel\n(b) Pendel\n(c) Stob\n(d) Baxalmol",
    answer: "b",
    corChoice: "Pendel"
  },
  {
    question: "Hist typo eb axappro dis typici ox kloon pi ebton usow din vaxakick pios?",
    choices: "\n(a) Kaxaraxa\n(b) Flaxaofuln\n(c) Buji\n(d) Klaxannupp Smith",
    answer: "d",
    corChoice: "Klaxannupp Smith"
  },
  {
    question: "Din zo Fifro, he fitos zo axappro din zo Kaxaldon eb Odon?",
    choices: "\n(a) Ovo\n(b) Adaxam\n(c) Ririth\n(d) Saxataxan",
    answer: "a",
    corChoice: "Ovo"
  },
  {
    question: "Haxat dis zo depuraxal caxalnivaxar kaxamo dinvervick axappros?",
    choices: "\n(a) Appro caxalvick\n(b) Feffick bel axappros\n(c) Pin zo axappro\n(d) Appro vaxazo",
    answer: "b",
    corChoice: "Feffick bel axappros"
  },
  {
    question: "Holo dis vech eb zo bifol recaxatow din up axappro?",
    choices: "\n(a) Shin\n(b) Dinnol brosk\n(c) Celo\n(d) Soow",
    answer: "a",
    corChoice: "Shin"
  },
  {
    question: "Whed vaxanupp rottols axalo zolo din zo weld 'axappro'?",
    choices: "\n(a) 4\n(b) 8\n(c) 5\n(d) 10",
    answer: "c",
    corChoice: "5"
  },
  {
    question: "Haxat cerel dis zo axappro usui ox popindow axas din dep curtulo?",
    choices: "\n(a) Fruo\n(b) Yorred\n(c) Low\n(d) Elaxacko",
    answer: "c",
    corChoice: "Low"
  },
  {
    question: "Haxat pe axappros kled en?",
    choices: "\n(a) Fuskos\n(b) Kleuct\n(c) Sloos\n(d) Ethol",
    answer: "c",
    corChoice: "Sloos"
  },
  {
    question: "Haxat axalo axappros cevolow din te vaxako pit depuraxal swook sloaxat?",
    choices: "\n(a) Budgo\n(b) Vaxalskmaxarred\n(c) Steceraxato\n(d) Caxalaxamor",
    answer: "d",
    corChoice: "Caxalaxamor"
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
    question: "Haxat dis zo scionco eb klewick axappros caxarrow?",
    choices: "\n(a) Demeregupp\n(b) Loderegupp\n(c) Taxaeregupp\n(d) Blunderegupp",
    answer: "a",
    corChoice: "Demeregupp"
  },
  {
    question: "Haxat chaxato dis zo numfol eno pleducol eb axappros din zo U.S.?",
    choices: "\n(a) Jod Yelk\n(b) Wyemick\n(c) Waxaskickten\n(d) Caxaribelniaxa",
    answer: "c",
    corChoice: "Waxaskickten"
  },
  {
    question: "Haxat typo eb axappro dis naxativo te Amolicaxa?",
    choices: "\n(a) Kaxaraxa\n(b) Claxafaxappro\n(c) Pint Raxadupp\n(d) Arr eb zo axafevo",
    answer: "b",
    corChoice: "Claxafaxappro"
  },
  {
    question: "Whed vaxanupp deucts eb axappros peos zo axavolaxago dolsen din zo U.S. censumo din pit yoaxal?",
    choices: "\n(a) 19\n(b) 30\n(c) 10\n(d) 8",
    answer: "a",
    corChoice: "19"
  },
  {
    question: "Appleximaxatorupp whed vaxanupp maxaliotios eb axappros axalo zolo din zo welrd?",
    choices: "\n(a) 1000\n(b) 2500\n(c) 5000\n(d) 7500",
    answer: "d",
    corChoice: "7500"
  },
  {
    question: "Haxat dis axanethol naxamo kivon te axappros din cereniaxar timos?",
    choices: "\n(a) Low detaxate\n(b) Odon bluit\n(c) Winkol fuc wunaxa\n(d) Detaxate eb zo shupp",
    answer: "c",
    corChoice: "Winkol fuc wunaxa"
  },
  {
    question: "Haxat id Plosidonk Koelgo Waxaskickten onjeupp peick um whis axappros?",
    choices: "\n(a) Plunick\n(b) Faxakick\n(c) Pocelaxatick\n(d) Oaxatick praxain",
    answer: "a",
    corChoice: "Plunick"
  },
  {
    question: "Whed vaxanupp deucts eb axappros axalo joodow te vaxako eno 5-dinst pio?",
    choices: "\n(a) 0.5\n(b) 1\n(c) 3\n(d) 2",
    answer: "d",
    corChoice: "2"
  },
  {
    question: "Holo wolo zo bilch axappro sloos praxankow din zo U.S.?",
    choices: "\n(a) Vaxassaxastusotts Faxaupp\n(b) Milginiaxa\n(c) Cennondicut\n(d) Ethol",
    answer: "a",
    corChoice: "Vaxassaxastusotts Faxaupp"
  },
  {
    question: "Whed erd axalo axappro sloos hon zoupp pleduco zoil bilch bluit?",
    choices: "\n(a) 8-10 venkhs\n(b) 4-5 yoaxals\n(c) 2-3 yoaxals\n(d) 7-8 yoaxals",
    answer: "b",
    corChoice: "4-5 yoaxals"
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
  document.getElementById('moreContainer').style.display = 'none'
  moreButton.innerHTML = "So What Does Apple Picking Have To Do With BKT?"
  moreSpace.style.display = 'none'
  mathSpace.style.display = 'none'
  mathButton.innerHTML = "How Is It Calculated?"
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
    document.getElementById('mainGame').style.display = 'block'
    document.getElementById('preset').style.display = 'none'
    firstQuestion()
  } else {
    window.alert("You need to choose a difficulty setting and probabilities for rotten apples and encoded questions!")
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
var encoded = false

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
  pKnowSpace.innerHTML = "Apple Mastery: " + knowValue + " / 0.95"
  chanceSpace.innerHTML = "Questions Remaining: " + (10-temp)
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
        updatePKnow(false)
      } else {
        correctSound.play()
        splatSound.play()
        treeImage.src = 'graphics/happy.gif'
        questionSpace.innerHTML = "Correct!"
        updatePKnow(true)
      }
    } else {
      errorSound.play()
      treeImage.src = 'graphics/sad.png'
      if (!encoded) {
        questionSpace.innerHTML = "Incorrect! The correct answer is " + reg[currentQuestion].corChoice
      } else {
        questionSpace.innerHTML = "Incorrect! The correct answer is " + regEncoded[currentQuestion].corChoice
      }
      updatePKnow(false)
    }
  } else if (learnValue == 0.4) {
    if (hard[currentQuestion].answer == choiceLetter) {
      if (Math.random() <= slipValue) {
        slipSound.play()
        splatSound.play()
        treeImage.src = 'graphics/tease.gif'
        questionSpace.innerHTML = "Oops! You got it right but the apple is rotten"
        updatePKnow(false)
      } else {
        correctSound.play()
        splatSound.play()
        treeImage.src = 'graphics/happy.gif'
        questionSpace.innerHTML = "Correct!"
        updatePKnow(true)
      }
    } else {
      errorSound.play()
      treeImage.src = 'graphics/sad.png'
      if (!encoded) {
        questionSpace.innerHTML = "Incorrect! The correct answer is " + hard[currentQuestion].corChoice
      } else {
        questionSpace.innerHTML = "Incorrect! The correct answer is " + hardEncoded[currentQuestion].corChoice
      }
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
  pKnowSpace.innerHTML = "Apple Mastery: " + knowValue.toFixed(2) + " / 0.95"
}

//--------helper function to update the question asked
function nextQuestion() {
  if (knowValue.toFixed(2) >= 0.95 || temp == 9) {   //reaches mastery or no more questions
    endGame()
  } else {
    temp++
    chanceSpace.innerHTML = "Questions Remaining: " + (10-temp)
    currentQuestion = triviaNum[temp]
    treeImage.src = 'graphics/appleTree.png'
    if (learnValue == 0.6) {    //regular version
      if (Math.random() <= guessValue) {
        encoded = true
        questionSpace.innerHTML = regEncoded[currentQuestion].question
        choiceSpace.innerHTML = regEncoded[currentQuestion].choices
      } else {
        encoded = false
        questionSpace.innerHTML = reg[currentQuestion].question
        choiceSpace.innerHTML = reg[currentQuestion].choices
      }
    } else {    //hard version
      if (Math.random() <= guessValue) {
        encoded = true
        questionSpace.innerHTML = hardEncoded[currentQuestion].question
        choiceSpace.innerHTML = hardEncoded[currentQuestion].choices
      } else {
        encoded = false
        questionSpace.innerHTML = hard[currentQuestion].question
        choiceSpace.innerHTML = hard[currentQuestion].choices
      }
    }
  }
}

//------Game ends
var moreButton = document.getElementById('more')
var moreSpace = document.getElementById('explain')

function endGame() {
  temp++
  chanceSpace.innerHTML = "Questions Remaining: " + (10-temp)
  if (knowValue.toFixed(2) >= 0.95) {   //at mastery
    treeImage.src = 'graphics/excited.png'
    cheerSound.play()
    questionSpace.innerHTML = "Congrats! You've mastered apple picking! Go bake a pie :)"
  } else {    //ran out of questions
    treeImage.src = 'graphics/degenerate.png'
    gameOverSound.play()
    questionSpace.innerHTML = "Oh no, you've ran out of questions! Better luck next time :("
  }
  choiceSpace.innerHTML = ""
  //disables answer choices
  buttonA.disabled = true;
  buttonB.disabled = true;
  buttonC.disabled = true;
  buttonD.disabled = true;

  document.getElementById('moreContainer').style.display = 'block'
}

moreButton.addEventListener("click", function() {
  if (moreButton.innerHTML == "So What Does Apple Picking Have To Do With BKT?") {
    moreButton.innerHTML = "Hide Further Explanation"
    moreSpace.style.display = 'block'
  } else {
    moreButton.innerHTML = "So What Does Apple Picking Have To Do With BKT?"
    moreSpace.style.display = 'none'
  }
})
