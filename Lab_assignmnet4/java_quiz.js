const quizQuestions = [
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra",
        hint: "It is often mistaken for the country's two largest cities."
    },
    {
        question: "Which geometric shape has five sides?",
        options: ["Hexagon", "Pentagon", "Octagon", "Triangle"],
        answer: "Pentagon",
        hint: "The prefix 'penta-' means five."
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Mars"],
        answer: "Jupiter",
        hint: "It's so large, it could contain all the other planets combined."
    },
    {
        question: "What chemical element is represented by the symbol 'Fe'?",
        options: ["Fluorine", "Iron", "Ferrum", "Fermium"],
        answer: "Iron",
        hint: "The symbol comes from its Latin name, 'ferrum'."
    },
    {
        question: "What is the result of 2 + 2 * 3?",
        options: ["8", "12", "10", "14"],
        answer: "8",
        hint: "Remember the order of operations (BODMAS)!"
    },
    {
        question: "In JavaScript, which keyword is used to declare a constant variable?",
        options: ["var", "let", "const", "static"],
        answer: "const",
        hint: "It's short for 'constant'."
    },

    {
        question: "Who is the founder and primary developer of the Linux kernel?",
        options: ["Richard Stallman", "Bill Gates", "Linus Torvalds", "Guido van Rossum"],
        answer: "Linus Torvalds",
        hint: "He started the project while studying at the University of Helsinki."
    }
];

const optionMap = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3
};

function FinalMessage(score, total) {
    const marks = (score / total) * 100;
    
    if (marks === 100) {
        return " Perfect Score! You're a genius!";
    } else if (marks >= 70) {
        return " Great Job! You passed with flying colors.";
    } else if (marks >= 40) {
        return " Not bad! Keep studying and you'll master it in no time.";
    } else {
        return " Time to review! Don't worry, every expert was once a beginner.";
    }
}

function runQuiz() {
    let restart = true;
    
    do {let score = 0;
        const totalQuestions = quizQuestions.length;
        let isCancelled = false;

        console.log("--- JavaScript Console Quiz Started ---");
        console.log(`Get Ready to answer ${totalQuestions} multiple-choice questions!`);

        for (let i = 0; i < totalQuestions; i++) {
            const currentQ = quizQuestions[i];

            const optionsDisplay = currentQ.options.map((opt, index) => 
                `${String.fromCharCode(65 + index)}: ${opt}`
            ).join('\n');

            const promptText = `Question ${i + 1} of ${totalQuestions}:\n${currentQ.question}\n\n${optionsDisplay}\n\nEnter the letter (A | B | C | D):`;
            const userAnswer = prompt(promptText);

            if (userAnswer === null) {
                isCancelled = true;
                break; 
            }

            const Answer = userAnswer.toLowerCase().trim();
            const sIndex = optionMap[Answer];
            
            if (sIndex === undefined) {
                alert("🛑 Invalid input. Please enter A, B, C, or D. Skipping question.");
                continue; 
            }

            const sOption = currentQ.options[sIndex];

            if (sOption === currentQ.answer) {
                score++;
                alert("✅ Correct! Your current score is " + score);
            } else {
                alert(`❌ Incorrect.\n\nCorrect Answer: ${currentQ.answer}\nHint: ${currentQ.hint}`);
            }
        }
        
        if (!isCancelled) {
            const finalMessage = FinalMessage(score, totalQuestions);
            alert(`Quiz Finished!\n\n${finalMessage}\nYour score: ${score} out of ${totalQuestions}.`);
            
            console.log("--- Quiz Ended ---");
            console.log(`Final Score: ${score} / ${totalQuestions}`);
            
            const restartPrompt = prompt("Type 'r' to play again, or press OK to finish.");
            const normalizedRestart = restartPrompt ? restartPrompt.toLowerCase().trim() : '';

            restart = (normalizedRestart === 'restart' || normalizedRestart === 'r');
            
            if (restart) {
                console.log("\n--- Restarting Quiz ---\n");
            }
        } else {
            restart = false;
        }

    } while (restart);
    
    console.log("Quiz session finished. \nThank you for playing!");
}


