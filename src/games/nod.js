// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import welcomeUser from '../cli.js';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    // eslint-disable-next-line no-param-reassign
    b = a % b;
    // eslint-disable-next-line no-param-reassign
    a = temp;
  }
  return a;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gamePlayNod = () => {
  const user = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const correctAnswer = gcd(num1, num2);
    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${user}!`);
};

export default gamePlayNod;
