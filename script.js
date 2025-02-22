const sentences = [
  { "sentence": "哈囉，你好嗎？", "answers": ["Chinese", "Mandarin", "Mandarin Chinese"] },
  { "sentence": "¿Qué haces?", "answers": ["Spanish"] },
  { "sentence": "Bonjour", "answers": ["French"] },
  { "sentence": "Olá", "answers": ["Portuguese"] },
  { "sentence": "здравствуйте", "answers": ["Russian"] },
  { "sentence": "नमस्ते", "answers": ["Hindi"] },
  { "sentence": "안녕하세요", "answers": ["Korean"] },
  { "sentence": "Guten Tag!", "answers": ["German"] },
  { "sentence": "Ciao, come stai?", "answers": ["Italian"] },
  { "sentence": "Kumusta ka?", "answers": ["Filipino", "Tagalog"] },
  { "sentence": "Kia ora!", "answers": ["Māori"] },
  { "sentence": "Hej, hur mår du?", "answers": ["Swedish"] },
  { "sentence": "Terve! Kuinka voit?", "answers": ["Finnish"] },
  { "sentence": "Siapa nama anda?", "answers": ["Indonesian"] },
  { "sentence": "สวัสดีครับ", "answers": ["Thai"] },
  { "sentence": "Merhaba! Nasılsın?", "answers": ["Turkish"] },
  { "sentence": "nafurahi kukuona", "answers": ["Swahili"] },
  { "sentence": "Shalom!", "answers": ["Hebrew"] },
  { "sentence": "Salam! Chetor hasti?", "answers": ["Persian", "Farsi"] },
  { "sentence": "Dzień dobry!", "answers": ["Polish"] },
  { "sentence": "Γεια σου!", "answers": ["Greek"] },
  { "sentence": "Buna ziua!", "answers": ["Romanian"] },
  { "sentence": "Lūdzu, runājiet lēnāk", "answers": ["Latvian"] },
  { "sentence": "Vu wun kënnt Dir?", "answers": ["Luxembourgish"] },
  { "sentence": "Hallo, wie geht's?", "answers": ["German"] },
  { "sentence": "Ahoj!", "answers": ["Czech"] },
  { "sentence": "God dag!", "answers": ["Danish"] },
  { "sentence": "Добрый день!", "answers": ["Russian"] },
  { "sentence": "Kumusta po kayo?", "answers": ["Filipino", "Tagalog"] },
  { "sentence": "Kin tashi lahia?", "answers": ["Hausa"] },
  { "sentence": "Mwaramutse!", "answers": ["Kinyarwanda"] },
  { "sentence": "Nyob zoo!", "answers": ["Hmong"] },
  { "sentence": "¡Buenos días!", "answers": ["Spanish"] },
  { "sentence": "Dobré ráno!", "answers": ["Slovak"] },
  { "sentence": "Egun on!", "answers": ["Basque"] },
  { "sentence": "Mingalaba!", "answers": ["Burmese"] },
  { "sentence": "Saluton!", "answers": ["Esperanto"] },
  { "sentence": "Zdravo!", "answers": ["Serbian", "Croatian", "Bosnian"] },
  { "sentence": "ሰላም", "answers": ["Amharic"] },
  { "sentence": "Kaixo!", "answers": ["Basque"] },
  { "sentence": "Molo!", "answers": ["Xhosa"] },
  { "sentence": "Sawubona!", "answers": ["Zulu"] },
  { "sentence": "สวัสดีค่ะ", "answers": ["Thai"] },
  { "sentence": "Ciamar a tha sibh?", "answers": ["Scottish Gaelic","Gaelic"] },
  { "sentence": "Góðan dag!", "answers": ["Icelandic"] },
  { "sentence": "வணக்கம்!", "answers": ["Tamil"] },
  { "sentence": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!", "answers": ["Punjabi"] },
  { "sentence": "హలో!", "answers": ["Telugu"] },
  { "sentence": "ನಮಸ್ಕಾರ!", "answers": ["Kannada"] },
  { "sentence": "السلام عليكم", "answers": ["Arabic"] },
  { "sentence": "Dobrý deň!", "answers": ["Slovak"] },
  { "sentence": "Baxtalo dyes!", "answers": ["Romani"] },
  { "sentence": "Bonan matenon!", "answers": ["Esperanto"] },
  { "sentence": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!", "answers": ["Punjabi"] },
  { "sentence": "Բարև ձեզ!", "answers": ["Armenian"] },
  { "sentence": "Здраво!", "answers": ["Macedonian"] },
  { "sentence": "Բարի օր!", "answers": ["Armenian"] },
  { "sentence": "Face un pezzu", "answers": ["Corsican"] },
  { "sentence": "އިސްޕަންތި", "answers": ["Dhivehi"] },
  { "sentence": "Kumusta!", "answers": ["Filipino", "Tagalog"] },
  { "sentence": "Tere hommikust!", "answers": ["Estonian"] },
  { "sentence": "Dobré odpoledne!", "answers": ["Czech"] },
  { "sentence": "Buenos días, amigo.", "answers": ["Spanish"] },
  { "sentence": "Magandang umaga!", "answers": ["Filipino", "Tagalog"] },
  { "sentence": "안녕히 계세요.", "answers": ["Korean"] },
  { "sentence": "こんにちは!", "answers": ["Japanese"] },
  { "sentence": "Jó reggelt!", "answers": ["Hungarian"] },
  { "sentence": "Chào buổi sáng!", "answers": ["Vietnamese"] },
  { "sentence": "Mba'éichapa!", "answers": ["Guarani"] },
  { "sentence": "Wilujeng énjing!", "answers": ["Sundanese"] },
  { "sentence": "Goede morgen!", "answers": ["Dutch"] },
  { "sentence": "Hyvää huomenta!", "answers": ["Finnish"] },
  { "sentence": "Habari za asubuhi!", "answers": ["Swahili"] },
  { "sentence": "Wie geht es Ihnen?", "answers": ["German"] },
  { "sentence": "Estás bien?", "answers": ["Spanish"] },
  { "sentence": "Je vais bien, merci.", "answers": ["French"] },
  { "sentence": "Eu estou bem.", "answers": ["Portuguese"] },
  { "sentence": "Как дела?", "answers": ["Russian"] },
  { "sentence": "ສະບາຍດີບ", "answers": ["Lao"] },
  { "sentence": "Apa kabar?", "answers": ["Indonesian"] },
  { "sentence": "Eyi be sɔ?", "answers": ["Twi"] },
  { "sentence": "Mihi placet legere", "answers": ["Latin"] },
  { "sentence": "戲棚跤徛久就是你的", "answers": ["Taiwanese","Taiwanese Taigi","Taigi","Minnan","Southern Min"]},
  { "sentence": "你在奈仔來個？", "answers": ["Hakka"] },
  { "sentence": "你叫(做)乜野名呀", "answers": ["Cantonese"] },
  { "sentence": "Сайхан амраарай", "answers": ["Mongolian"] },
  { "sentence": "আসসালামু আলাইকুম", "answers": ["Bengali"] },
  { "sentence": "Legshom bay rang yoey", "answers": ["Bhutanese"] },
  { "sentence": "نڬارا بروني دارالسلام", "answers": ["Jawi","Jawi script"] },
  { "sentence": "ព្រះរាជាណាចក្រកម្ពុជា", "answers": ["Khmer"] },  
  { "sentence": "ބައްއަޖޖެވުރި ދުވަހެޔ", "answers": ["Maldivian","Dhivehi","Divehi"] },  
  { "sentence": "संघीय लोकतान्त्रिक गणतन्त्र नेपाल", "answers": ["Nepali"] },  
  { "sentence": "საქართველო", "answers": ["Georgia"] }, 
  { "sentence": "беларуская мова", "answers": ["Belarusian"] }, 
  { "sentence": "lietuvių kalba", "answers": ["Lithuanian"] },
  { "sentence": "Hoe Gaan Dit Met U?", "answers": ["Afrikaans"] },
  { "sentence": "ẹ kú ọjọ́ mẹ́ta", "answers": ["Yoruba"] }, 
  { "sentence": "Si argun naaf gammachudha", "answers": ["Oromo"] }, 
  { "sentence": "Yoo a jaajio he jam", "answers": ["Fula","Fulani","Fulah"] }, 
  { "sentence": "ደህና አመሸህ?", "answers": ["Amharic"] }, 
  { "sentence": "Ezigbo mmadu", "answers": ["Igbo"] }, 
  { "sentence": "Nga’ayho", "answers": ["Pangcah","Amis"] }, 
  { "sentence": "Ymaitereí ndorohechavéi", "answers": ["Guarani"] }, 
  { "sentence": "¿Imaynallataq kasanki?", "answers": ["Southern Quechua","Quechua","Qichwa","Qhichwa"] }, 
  { "sentence": "He kawhe māu?", "answers": ["Māori","Maori"] }, 
  { "sentence": "Aap kaise hain?", "answers": ["Hindi"] }
];

let isQuizMode = true;
const currentModeElement = document.getElementById("current-mode");
const quizModeButton = document.getElementById("quizMode");
const practiceModeButton = document.getElementById("practiceMode");
const returnToStartButton = document.getElementById("returnToStart");

let currentSentenceIndex = 0;
let score = 0;
let timeLeft = 120; // 2 minutes
let timerInterval;
let questionNumber = 1;
let availableSentences = [...sentences]; // Copy of the original sentences array

const startPage = document.getElementById("startPage");
const startButton = document.getElementById("startButton");
const quizArea = document.getElementById("quiz-area");
const sentenceElement = document.getElementById("sentence");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("timer");
const modal = document.getElementById("completionModal");
const modalMessage = document.getElementById("modalMessage");
const closeButton = document.querySelector(".close-button");
const medalImage = document.getElementById("medal");
const questionNumberElement = document.getElementById("question-number");

quizModeButton.addEventListener("click", () => {
  isQuizMode = true;
  startGame();
});

practiceModeButton.addEventListener("click", () => {
  isQuizMode = false;
  startGame();
});

function startGame() {
  startPage.style.display = "none";
  quizArea.style.display = "block";
  currentModeElement.textContent = isQuizMode ? "Quiz Mode" : "Practice Mode";
  
  // Reset game state
  score = 0;
  questionNumber = 1;
  scoreElement.textContent = "0";
  availableSentences = [...sentences];
  
  if (isQuizMode) {
    timeLeft = 120;
    timerElement.style.display = "block";
    startTimer();
  } else {
    timerElement.style.display = "none";
  }
  
  loadSentence();
}

function loadSentence() {
  if (availableSentences.length === 0) {
    availableSentences = [...sentences];
  }

  const randomIndex = Math.floor(Math.random() * availableSentences.length);
  currentSentenceIndex = sentences.findIndex(sentence => 
    sentence.sentence === availableSentences[randomIndex].sentence
  );
  sentenceElement.textContent = availableSentences[randomIndex].sentence;
  answerInput.value = "";
  resultElement.innerHTML = ""; // Clear the result

  // Remove the selected sentence from available sentences
  availableSentences.splice(randomIndex, 1);

  // Update question number display
  questionNumberElement.textContent = `Question: ${questionNumber}`;
  questionNumber++;
}

// Update event listeners to prevent multiple submissions
submitButton.addEventListener("click", () => {
  if (!submitButton.disabled) {
    submitButton.disabled = true;
    checkAnswer();
    setTimeout(() => {
      submitButton.disabled = false;
      answerInput.focus(); // Focus back on input for next question
    }, 2000);
  }
});

answerInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter" && !submitButton.disabled) {
    event.preventDefault();
    submitButton.disabled = true;
    checkAnswer();
    setTimeout(() => {
      submitButton.disabled = false;
      answerInput.focus(); // Focus back on input for next question
    }, 2000);
  }
});

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  const correctAnswers = sentences[currentSentenceIndex].answers;
  
  if (correctAnswers.some(answer => answer.toLowerCase() === userAnswer.toLowerCase())) {
    resultElement.innerHTML = `<span style="color: green;">✓ Correct!</span>`;
    score++;
    scoreElement.classList.add("score-update");
    setTimeout(() => {
      scoreElement.classList.remove("score-update");
    }, 500);
  } else {
    if (isQuizMode) {
      resultElement.innerHTML = `<span style="color: red;">✗ Incorrect.</span>`;
    } else {
      let correctAnswersText = correctAnswers.join(' or ');
      resultElement.innerHTML = `
        <span style="color: red;">✗ Incorrect.</span><br>
        <span style="font-size: 0.9em;">The correct answer was: ${correctAnswersText}</span>
      `;
    }
  }

  scoreElement.textContent = score;
  
  // Different timing for different modes
  const nextQuestionDelay = isQuizMode ? 500 : 2000;
  
  setTimeout(() => {
    loadSentence();
    answerInput.value = "";
    answerInput.focus();
  }, nextQuestionDelay);
}
  
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds; // Add leading zero for single-digit seconds
  timerElement.textContent = `Time: ${minutes}:${seconds}`;
  timeLeft--;

  if (timeLeft < 0) {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  quizArea.style.display = "none";
  
  let message;
  let medal = "none";
  
  if (isQuizMode) {
    if (score >= 20) medal = "gold";
    else if (score >= 15) medal = "silver";
    else if (score >= 10) medal = "bronze";
    
    message = score < 10 
      ? `Challenge completed! 👍You identified ${score} languages. Keep practicing!💪`
      : `🎊Congratulations!🎉 You identified ${score} languages and won a ${medal} medal!`;
  } else {
    message = `💪Practice session completed! You identified ${score} languages correctly.👍`;
  }
  
  modalMessage.textContent = message;
  
  // Show medal only in quiz mode
  if (isQuizMode && medal !== "none") {
    medalImage.src = getMedalImage(medal);
    medalImage.style.display = "block";
  } else {
    medalImage.style.display = "none";
  }
  
  modal.style.display = "block";
}

function getMedalImage(medal) {
  const baseUrl = "https://alittlemoreenglish.weebly.com/uploads/2/6/6/3/26638990/";
  return `${baseUrl}${medal}-medal_orig.png`;
}

// Return to start handler
returnToStartButton.addEventListener("click", () => {
  modal.style.display = "none";
  startPage.style.display = "block";
  resetGame();
});

function resetGame() {
  clearInterval(timerInterval);
  score = 0;
  timeLeft = 120;
  questionNumber = 1;
  availableSentences = [...sentences];
  scoreElement.textContent = "0";
  resultElement.textContent = "";
  answerInput.value = "";
}

// Update timer to only run in quiz mode
function updateTimer() {
  if (!isQuizMode) return;
  
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerElement.textContent = `Time: ${minutes}:${seconds}`;
  timeLeft--;

  if (timeLeft < 0) {
    endQuiz();
  }
}
