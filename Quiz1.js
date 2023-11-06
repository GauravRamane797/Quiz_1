const Questions = [{
    'que': "  which of the following markup language",
    'a': 'html',
    'b': 'css',
    'c': 'javascript',
    'd': 'python',
    'correct': 'a'
},
{
    'que': " Who painted the Mona Lisa? ",
    'a': 'Vincent van Gogh',
    'b': 'Leonardo da Vinci',
    'c': ' Pablo Picasso',
    'd': ' Michelangelo',
    'correct': 'a'
},
{
    'que': " Which planet is known as the Red Planet?",
    'a': ' Venus',
    'b': ' Mars',
    'c': 'Jupiter',
    'd': 'Saturn',
    'correct': 'b'
},
{
    'que': " Who wrote the play Romeo and Juliet?",
    'a': ' William Shakespeare',
    'b': 'Oscar Wilde',
    'c': 'Jane Austen',
    'd': 'Charles Dickens',
    'correct': 'a'
},
{
    'que': "What is the largest ocean on Earth?",
    'a': 'Atlantic Ocean',
    'b': 'Arctic Ocean',
    'c': ' Indian Ocean',
    'd': 'Pacific Ocean',
    'correct': 'd'
}



]

let index = 0;
let total = Questions.length;
let right = 0, wrong = 0;
const QuesBox = document.getElementById("QuesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = Questions[index]
    console.log(data);
    QuesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}
const submitQuiz = () => {
    const data = Questions[index];
    const ans = getAnswer()
    console.log(ans,data.correct)
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer  = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `<h1>Thank you for playing the Quiz</h1>
    <h3> ${right} / ${total} are correct </h3>`
}

// initial call
loadQuestion();