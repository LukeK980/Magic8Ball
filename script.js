const eightBall =
    document.querySelector("main #ball");
const answerText =
    document.querySelector("#ball #answer .answerText");
const answerDiv =
    document.querySelector("#ball #answer");
const questionInput =
    document.querySelector("main .questionBox input");

const answers = [
    "Increase Utilization",
    "Delegate",
    "Live the TerraValues",
    "Search TerraNet",
    "Learn from this",
    "Look at the Data",
    "Trust Yourself",
    "Safety First",
    "Ask again later",
    "Be the Future",
    "What would Bill do",
    "Consult TV2030",
    "Act now",
    "Listen More, Talk less",
    "Use a Floating Holiday",
    "Send to Tech Editing",
    "Document it",
    "Ask Copilot",
    "Sleep on it",
    "Talk to client",
];

const questionTable = 
    document.querySelector("footer #questionAnswerTable");
const tableBody = 
    document.querySelector("footer #questionAnswerTable tbody");

eightBall.addEventListener("click", () => {
    const question = questionInput.value.trim();
    let answer;
    if (question === "") {
        answer = "I can't tell with that information.";
    } else {
        const randomIndex = 
            Math.floor(Math.random() * answers.length);
        answer = answers[randomIndex];
    }
    eightBall.classList.add("shake");
    answerDiv.style.animation = "colorChange 1s";
    answerText.style.animation = "fadeOut 1s";
    setTimeout(() => {
        answerText.innerText = "";
        answerDiv.classList.add("answerDisplayed");
    }, 700);


    setTimeout(() => {
        eightBall.classList.remove("shake");
        answerText.innerText = answer;
        answerText.style.animation = "fadeIn 1s";
        setTimeout(() => {
            answerText.style.animation = "";
        }, 700);
        if (question !== "") {
            const row = document.createElement("tr");
            const questionCell = document.createElement("td");
            const answerCell = document.createElement("td");
            questionCell.textContent = question;
            answerCell.textContent = answer;
            row.appendChild(questionCell);
            row.appendChild(answerCell);
            tableBody.appendChild(row);
            questionTable.style.display = "block";
        }
    }, 1500);
});