// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import welcomeUser from './cli.js';

const roundCount = 3;

export default function runEngine(rules, generateRound) {
  const user = welcomeUser();

  console.log(rules);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log('Question: ', question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      return;
    }
  }

  console.log(`Congratulations, ${user}!`);
}
