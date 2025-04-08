// eslint-disable-next-line import/extensions
import runEngine from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default function gamePlayEven() {
  runEngine('Answer "yes" if the number is even, otherwise answer "no"', generateRound);
}
