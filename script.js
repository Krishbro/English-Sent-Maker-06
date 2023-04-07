const sentences = [
  { english: 'This is the man who broke the_door.', sinhala: '01. මේ තමයි දොර කඩපු මනුස්සයා.' },
  { english: 'I love the rice which my mother prepares.', sinhala: '02. මම ආසයි මගේ අම්මා පිලියෙල කරන බත් වලට.' },
  { english: 'We met the women who owns this house.', sinhala: '03. මේ ගෙදර අයිතිකාරිය අපට මුනගැසුනා.' },
  { english: 'I have to buy a new battery for my car.', sinhala: '04. මට මගේ මෝටරථයට අලුත් බැටරියක් ගන්න වෙනවා.' },
  { english: 'You have to submit the assignment by Sunday.', sinhala: '05. ඔබට ඉරිදා වන විට මෙම පැවරුම සම්පූර්ණ කරන්න වෙනවා.' },
  { english: 'Have you ever eaten Duriyan?', sinhala: '06. ඔයා කවදා හරි දූරියන් කාල තියෙනවද?' },
  { english: 'Who are you going to the dance with?', sinhala: '0. ඔබ කාත් එක්කද නැටුමට යන්න හදන්නෙ?' },
  { english: 'What is your job at the company?', sinhala: '08. සමාගමේ ඔබේ රැකියාව කුමක්ද?' },
  { english: 'Who was that person talking to you on the phone?', sinhala: '09. ඔබ දුරකතනයෙන් කතා කරමින් සිටි පුද්ගලයා කවුද?' },
  { english: 'I have been in India for two months.', sinhala: '10. මම මාස දෙකක් ඉන්දියාවේ සිටියා.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://learnenglishsinhala.blogspot.com/2023/04/test.html";
});
