// eslint-disable-next-line import/extensions
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProgression() {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);
  const progression = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const missingIndex = getRandomInt(0, length - 1);
  const missingValue = progression[missingIndex];
  progression[missingIndex] = '..';

  return { progression, missingValue };
}

function generateRound() {
  const { progression, missingValue } = generateProgression();
  const question = progression.join(' ');

  return [question, String(missingValue)];
}

export default function gamePlayArithmetic() {
  runEngine(rules, generateRound);
}
