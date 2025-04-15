// eslint-disable-next-line import/extensions
import runEngine from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateRound = () => {
  const operations = ['+', '-', '*'];

  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);

  let question;
  let correctAnswer;

  switch (operation) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      break;
  }

  return [question, correctAnswer];
};

const rules = 'What is the result of the expression?';

export default function gamePlayCalc() {
  runEngine(rules, generateRound);
}
