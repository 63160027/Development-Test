interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
  }
   
  const questions: Question[] = [
    {
      question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
      choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
      correctAnswer: 0,
    },
    {
      question: 'Which method is used to add one or more elements to the end of an array?',
      choices: ['push()', 'join()', 'slice()', 'concat()'],
      correctAnswer: 0,
    },
    {
      question: 'What is the result of the following expression?\n\n3 + 2 + "7"',
      choices: ['"327"', '"12"', '"57"', '"NaN"'],
      correctAnswer: 2,
    },
    {
      question: 'What is the purpose of the "use strict" directive in JavaScript?',
      choices: ['Enforce stricter type checking', 'Enable the use of modern syntax', 'Enable strict mode for improved error handling', 'Disable certain features for better performance'],
      correctAnswer: 2,
    },
    {
      question: 'What is the scope of a variable declared with the "let" keyword?',
      choices: ['Function scope', 'Global scope', 'Block scope', 'Module scope'],
      correctAnswer: 2,
    },
    {
      question: 'Which higher-order function is used to transform elements of an array into a single value?',
      choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
      correctAnswer: 2,
    },
    {
      question: 'What does the "=== " operator in JavaScript check for?',
      choices: ['Equality of values', 'Equality of values and types', 'Inequality of values', 'Reference equality'],
      correctAnswer: 1,
    },
    {
      question: 'What is the purpose of the "this" keyword in JavaScript?',
      choices: ['Refer to the current function', 'Refer to the parent function', 'Refer to the global object', 'Refer to the object that owns the current code'],
      correctAnswer: 3,
    },
    {
      question: 'What does the "NaN" value represent in JavaScript?',
      choices: ['Not a Number', 'Null', 'Negative Number', 'Not Applicable'],
      correctAnswer: 0,
    },
    {
      question: 'Which method is used to remove the last element from an array?',
      choices: ['pop()', 'shift()', 'slice()', 'splice()'],
      correctAnswer: 0,
    },
  ];
  

const root = document.getElementById('exercise2') as HTMLDivElement
if (root) {
  let score: number = 0;
  const scoreDiv = document.createElement("div");
  scoreDiv.textContent = "Current Score: " + score + "/10";
  root.appendChild(scoreDiv);

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    let j = 0;
    const divTitle = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = question.question;
    divTitle.appendChild(paragraph);

    const choicesBox = document.createElement("div");
    for (let choiceIndex = 0; choiceIndex < question.choices.length; choiceIndex++) {
        const choice = question.choices[choiceIndex];
          
        const choice1 = document.createElement("label");
        const choice2 = document.createElement("input");
        choice2.type = "radio";
        choice2.name = `question${i}`;
        choice2.value = choiceIndex.toString();
        const span = document.createElement("span");
        span.textContent = choice;
        const br = document.createElement("br");
      
        choice1.appendChild(choice2);
        choice1.appendChild(span);
        choice1.appendChild(br);
        choicesBox.appendChild(choice1);
      }
      divTitle.appendChild(choicesBox);

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    divTitle.appendChild(submit);
    
    submit.addEventListener("click", () => {
        const Answer = document.querySelector(`input[name=question${i}]:checked`) as HTMLInputElement;
        if (Answer) {
          const Answer1 = parseInt(Answer.value);
          if (Answer1 === question.correctAnswer) {
            score++;
            scoreDiv.textContent = `Current Score: ${score}/10`;
            resultText.textContent = "Correct!";
          } else {
            resultText.textContent = "Incorrect!";
          }
          submit.disabled = true;
        } else {
          resultText.textContent = "Please choose an answer!";
        }
      });
    const resultText = document.createElement("p");
    divTitle.appendChild(resultText);
    root.appendChild(divTitle);
  }
}