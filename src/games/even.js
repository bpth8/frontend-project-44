// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import welcomeUser from '../cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const gamePlayEven = () => {
  const user = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

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

export default gamePlayEven;
