// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const welcomeUser = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  return name;
};

export default welcomeUser;
