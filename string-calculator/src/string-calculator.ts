export function add(numbers: string): number {
  if (numbers.length === 0) return 0;

  const delimiter = getDelimiter(numbers);
  numbers = removeDelimiter(numbers);

  let numbersArray = stringToNumbersArray(numbers, delimiter);
  numbersArray = removeNegativesAndGreaterThan1000(numbersArray);

  return numbersArray.reduce((sum, number) => sum + number, 0);
}

const getDelimiter: (numbers: string) => string = (numbers) => {
  let delimiter = ",";

  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbers = numbers.slice(4);
  }

  return delimiter;
};

const removeDelimiter: (numbers: string) => string = (numbers) =>
  numbers.startsWith("//") ? numbers.slice(4) : numbers;

const stringToNumbersArray: (numbers: string, delimiter: string) => number[] = (
  numbers,
  delimiter,
) => {
  const negatives: number[] = [];

  const numbersArray = numbers
    .replaceAll("\n", delimiter)
    .split(delimiter)
    .map((number) => {
      const numeric = Number(number);
      if (numeric < 0) negatives.push(numeric);
      return numeric;
    });

  if (negatives.length > 0)
    throw new Error("negatives not allowed: " + negatives.join(", "));

  return numbersArray;
};

const removeNegativesAndGreaterThan1000: (numbers: number[]) => number[] = (
  numbers,
) => {
  return numbers.filter((number) => number > 0 && number <= 1000);
};
