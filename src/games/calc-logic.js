// eslint-disable-next-line import/extensions, import/no-useless-path-segments
import gamePlayCalc from './calc.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const generateQuestion = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  let question;
  let correctAnswer;

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = String(num1 * num2);
      break;
    default:
      break;
  }

  return { question, correctAnswer };
};

const playCalc = () => {
  gamePlayCalc(generateQuestion);
};

export default playCalc;
