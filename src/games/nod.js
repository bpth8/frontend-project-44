// eslint-disable-next-line import/extensions
import runEngine from '../index.js';

const getGCD = (a, b) => {
  while (b) {
    // eslint-disable-next-line no-param-reassign
    [a, b] = [b, a % b];
  }
  return a;
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2).toString();

  return [question, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default function gamePlayNod() {
  runEngine(rules, generateRound);
}
