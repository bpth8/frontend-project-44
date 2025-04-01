// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import welcomeUser from '../cli.js';

const gamePlayCalc = (generateQuestion) => {
  const user = welcomeUser();
  console.log('What is the result of the expression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateQuestion();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${user}!`);
};

export default gamePlayCalc;
