const sentences = [
  { "sentence": "你好嗎？", "answers": ["Chinese", "Mandarin", "Mandarin Chinese"] },
  { "sentence": "Hola", "answers": ["Spanish"] },
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
  { "sentence": "Selamat pagi!", "answers": ["Indonesian"] },
  { "sentence": "สวัสดีครับ", "answers": ["Thai"] },
  { "sentence": "Merhaba! Nasılsın?", "answers": ["Turkish"] },
  { "sentence": "Jambo!", "answers": ["Swahili"] },
  { "sentence": "Shalom!", "answers": ["Hebrew"] },
  { "sentence": "Salam! Chetor hasti?", "answers": ["Persian", "Farsi"] },
  { "sentence": "Dzień dobry!", "answers": ["Polish"] },
  { "sentence": "Γεια σου!", "answers": ["Greek"] },
  { "sentence": "Buna ziua!", "answers": ["Romanian"] },
  { "sentence": "Sveiki!", "answers": ["Latvian"] },
  { "sentence": "Moien!", "answers": ["Luxembourgish"] },
  { "sentence": "Hallo, wie geht's?", "answers": ["German"] },
  { "sentence": "Ahoj!", "answers": ["Czech"] },
  { "sentence": "God dag!", "answers": ["Danish"] },
  { "sentence": "Добрый день!", "answers": ["Russian"] },
  { "sentence": "Kamusta ka na?", "answers": ["Filipino", "Tagalog"] },
  { "sentence": "Sannu!", "answers": ["Hausa"] },
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
  { "sentence": "Halò!", "answers": ["Scottish Gaelic","Sangheili"] },
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
  { "sentence": "Salu!", "answers": ["Corsican"] },
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
  { "sentence": "Nǐ chī fàn le ma?", "answers": ["Chinese", "Mandarin", "Mandarin Chinese"] },
  { "sentence": "Wie geht es Ihnen?", "answers": ["German"] },
  { "sentence": "Estás bien?", "answers": ["Spanish"] },
  { "sentence": "Je vais bien, merci.", "answers": ["French"] },
  { "sentence": "Eu estou bem.", "answers": ["Portuguese"] },
  { "sentence": "Как дела?", "answers": ["Russian"] },
  { "sentence": "Sabai di mai?", "answers": ["Lao"] },
  { "sentence": "Apa kabar?", "answers": ["Indonesian"] },
  { "sentence": "Eyi be sɔ?", "answers": ["Twi"] },
  { "sentence": "Mihi placet legere", "answers": ["Latin"] },
  { "sentence": "戲棚跤徛久就是你的", "answers": ["Taiwanese"."Taiwanese Taigi","Taigi","Minnan","Southern Min"] },
  { "sentence": "Aap kaise hain?", "answers": ["Hindi"] }
];

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

function loadSentence() {
  if (availableSentences.length === 0) {
    availableSentences = [...sentences]; // Reset available sentences if all have been shown
  }

  const randomIndex = Math.floor(Math.random() * availableSentences.length);
  currentSentenceIndex = sentences.findIndex(sentence => sentence.sentence === availableSentences[randomIndex].sentence);
  sentenceElement.textContent = availableSentences[randomIndex].sentence;
  answerInput.value = "";
  resultElement.textContent = "";

  // Remove the selected sentence from the available sentences
  availableSentences.splice(randomIndex, 1);

  // Update question number display
  questionNumberElement.textContent = `Question: ${questionNumber}`;
  questionNumber++;
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  const correctAnswers = sentences[currentSentenceIndex].answers;

  if (correctAnswers.some(answer => answer.toLowerCase() === userAnswer.toLowerCase())) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";
    score++;
    // Trigger score animation
    scoreElement.classList.add("score-update");
    setTimeout(() => {
      scoreElement.classList.remove("score-update");
    }, 500);
  } else {
    resultElement.textContent = "Incorrect. Try again!";
    resultElement.style.color = "red";
  }

  scoreElement.textContent = score;
  loadSentence(); // Load the next sentence immediately after submission
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
  sentenceElement.style.display = "none";
  answerInput.style.display = "none";
  submitButton.style.display = "none";
  timerElement.style.display = "none";

  let medal;
  if (score >= 20) {
    medal = "gold";
  } else if (score >= 15) {
    medal = "silver";
  } else if (score >= 10) {
    medal = "bronze";
  } else {
    medal = "none";
  }

  let medalImagePath = "";
  switch (medal) {
    case "gold":
      medalImagePath = "https://alittlemoreenglish.weebly.com/uploads/2/6/6/3/26638990/gold-medal_orig.png";
      break;
    case "silver":
      medalImagePath = "https://alittlemoreenglish.weebly.com/uploads/2/6/6/3/26638990/silver-medal_orig.png";
      break;
    case "bronze":
      medalImagePath = "https://alittlemoreenglish.weebly.com/uploads/2/6/6/3/26638990/bronze-medal_orig.png";
      break;
    default:
      medalImagePath = ""; // No medal image
      break;
  }

  if (medalImagePath) {
    medalImage.src = medalImagePath;
    medalImage.alt = medal + " medal";
  } else {
    medalImage.style.display = "none"; // Hide the medal image if no medal is awarded
  }

  let message;
  if (score < 10) {
    message = `Challenge completed! You successfully identified ${score} languages. 👍Keep practicing to improve your knowledge about world languages!💪`;
  }
  else {
    message = `Challenge completed! You successfully identified ${score} languages in the world. 🎊 Congratulations! 🎉You've won a ${medal.charAt(0).toUpperCase() + medal.slice(1)} medal.`;
  }
  modalMessage.textContent = message;
  modal.style.display = "block";
}

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

submitButton.addEventListener("click", () => {
  checkAnswer();
});

answerInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
});

startButton.addEventListener("click", () => {
  startPage.style.display = "none";
  quizArea.style.display = "block";
  loadSentence();
  startTimer();
});
