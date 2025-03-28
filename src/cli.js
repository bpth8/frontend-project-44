// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const userName = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0;
const gamePlay = () => {
  const user = userName();
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

gamePlay();

export default userName;
