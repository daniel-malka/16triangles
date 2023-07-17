function generateUniqueRandomNumbers(min, max, count) {
  if (count > max - min + 1) {
    throw new Error('Cannot generate unique random numbers. Count exceeds range.');
  }

  const numbers = [];

  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
export default generateUniqueRandomNumbers;
