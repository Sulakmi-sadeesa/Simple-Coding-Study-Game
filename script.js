const startBtn = document.getElementById('start-btn');
const map = document.getElementById('map');
const intro = document.querySelector('.intro');
const quest = document.getElementById('quest');
const questTitle = document.getElementById('quest-title');
const questText = document.getElementById('quest-text');
const choicesDiv = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');

let currentQuestIndex = 0;
let currentSet = [];

const questSets = {
  1: [
    { title: "C: Variables", question: "Which is the correct way to declare an int variable?", choices: ["int x;", "integer x;", "num x;"], answer: "int x;" }
  ],
  2: [
    { title: "C: If-Else", question: "What keyword is used for an else-if condition in C?", choices: ["elseif", "else if", "elif"], answer: "else if" }
  ],
  3: [
    { title: "Python: Loops", question: "Which is a valid Python while loop?", choices: ["while x > 0:", "loop while x:", "while(x > 0)"], answer: "while x > 0:" }
  ],
  4: [
    { title: "Python: Functions", question: "How do you define a function in Python?", choices: ["def func():", "function func()", "func def()"], answer: "def func():" }
  ],
  5: [
    { title: "Final Quiz", question: "Which one is a correct function declaration in C?", choices: ["int sum(int a, int b);", "func sum(a, b)", "def sum()"], answer: "int sum(int a, int b);" }
  ]
};

startBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  map.classList.remove('hidden');
});

document.querySelectorAll('.barrier').forEach(barrier => {
  barrier.addEventListener('click', () => {
    const level = barrier.getAttribute('data-level');
    currentSet = questSets[level];
    currentQuestIndex = 0;
    map.classList.add('hidden');
    showQuest();
  });
});

function showQuest() {
  const q = currentSet[currentQuestIndex];
  if (!q) {
    alert('You have cleared this barrier!');
    quest.classList.add('hidden');
    map.classList.remove('hidden');
    return;
  }
  questTitle.textContent = q.title;
  questText.textContent = q.question;
  choicesDiv.innerHTML = '';
  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === q.answer) {
        btn.style.background = '#0f0';
      } else {
        btn.style.background = '#f00';
      }
    };
    choicesDiv.appendChild(btn);
  });
  quest.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
  currentQuestIndex++;
  showQuest();
});
