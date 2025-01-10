/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (c >= b && c >= a) return c;
  if (b >= c && b >= a) return b;
  return a;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const checks = [
    queen.x === king.x,
    queen.y === king.y,
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y),
  ];
  return checks.some(Boolean);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let currentNumber = num;
  const romanNumerals = [
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' },
  ];
  for (let index = 0; index < romanNumerals.length; index += 1) {
    const { number, roman } = romanNumerals[index];
    while (currentNumber >= number) {
      result += roman;
      currentNumber -= number;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let separator = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    if (char === '-') {
      result += 'minus';
    } else {
      switch (char) {
        case '1':
          result += `${separator}one`;
          break;
        case '2':
          result += `${separator}two`;
          break;
        case '3':
          result += `${separator}three`;
          break;
        case '4':
          result += `${separator}four`;
          break;
        case '5':
          result += `${separator}five`;
          break;
        case '6':
          result += `${separator}six`;
          break;
        case '7':
          result += `${separator}seven`;
          break;
        case '8':
          result += `${separator}eight`;
          break;
        case '9':
          result += `${separator}nine`;
          break;
        case '0':
          result += `${separator}zero`;
          break;
        case '.':
        case ',':
          result += `${separator}point`;
          break;
        default:
          break;
      }
    }
    separator = ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n) {
    if (n % 10 === digit) return true;
    n = Math.floor(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let currentIndex = 0; currentIndex < arr.length; currentIndex += 1) {
    rightSum -= arr[currentIndex];
    if (leftSum === rightSum) {
      return currentIndex;
    }
    leftSum += arr[currentIndex];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  let num = 1;
  let x = 0;
  let y = 0;
  let direction = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (num <= size * size) {
    matrix[x][y] = num;
    num += 1;
    const [dx, dy] = directions[direction];
    const nx = x + dx;
    const ny = y + dy;
    if (
      nx < 0 ||
      nx >= size ||
      ny < 0 ||
      ny >= size ||
      matrix[nx][ny] !== undefined
    ) {
      direction = (direction + 1) % 4;
    }
    x += directions[direction][0];
    y += directions[direction][1];
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const { length } = newMatrix;
  let layer = 0;
  while (layer < length / 2) {
    const first = layer;
    const last = length - layer - 1;
    let i = first;
    while (i < last) {
      const position = i - first;
      const top = newMatrix[first][i];
      const left = newMatrix[last - position][first];
      newMatrix[first][i] = left;
      const bottom = newMatrix[last][last - position];
      newMatrix[last - position][first] = bottom;
      const right = newMatrix[i][last];
      newMatrix[last][last - position] = right;
      newMatrix[i][last] = top;
      i += 1;
    }
    layer += 1;
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const resultArr = arr;
  const n = resultArr.length;
  let i = 1;
  while (i < n) {
    const currentElement = resultArr[i];
    const index = i;
    let j = index - 1;
    let elementMoved = false;
    while (j >= 0) {
      if (resultArr[j] > currentElement) {
        resultArr[j + 1] = resultArr[j];
        j -= 1;
        elementMoved = true;
      } else {
        break;
      }
    }
    if (elementMoved) {
      resultArr[j + 1] = currentElement;
    }
    i += 1;
  }
  return resultArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const n = str.length;
  const subShuffle = (result) => {
    let oddPositions = '';
    let evenPositions = '';
    for (let index = 0; index < n; index += 1) {
      if (index % 2 === 0) {
        evenPositions += result[index];
      } else {
        oddPositions += result[index];
      }
    }
    return evenPositions + oddPositions;
  };
  let period = 0;
  let result = str;
  do {
    result = subShuffle(result);
    period += 1;
  } while (result !== str && period <= iterations);
  const effectiveIterations = iterations % period;
  result = str;
  for (let iteration = 0; iteration < effectiveIterations; iteration += 1) {
    result = subShuffle(result);
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digitsArr = [];
  let result = 0;
  let currentNumber = number;
  while (currentNumber > 0) {
    digitsArr.push(currentNumber % 10);
    currentNumber = Math.floor(currentNumber / 10);
  }
  const arrlength = digitsArr.length;
  for (let i = 0; i < arrlength / 2; i += 1) {
    const temp = digitsArr[i];
    digitsArr[i] = digitsArr[arrlength - 1 - i];
    digitsArr[arrlength - 1 - i] = temp;
  }
  for (let i = arrlength - 1; i > 0; i -= 1) {
    if (digitsArr[i - 1] < digitsArr[i]) {
      let minIndex = i;
      for (let j = i; j < arrlength; j += 1) {
        if (
          digitsArr[j] > digitsArr[i - 1] &&
          digitsArr[j] < digitsArr[minIndex]
        ) {
          minIndex = j;
        }
      }
      let temp = digitsArr[i - 1];
      digitsArr[i - 1] = digitsArr[minIndex];
      digitsArr[minIndex] = temp;
      for (let k = i; k < arrlength - 1; k += 1) {
        for (let l = k + 1; l < arrlength; l += 1) {
          if (digitsArr[k] > digitsArr[l]) {
            temp = digitsArr[k];
            digitsArr[k] = digitsArr[l];
            digitsArr[l] = temp;
          }
        }
      }
      break;
    }
  }
  for (let i = 0; i < arrlength; i += 1) {
    result = result * 10 + digitsArr[i];
  }
  return result === number ? number : result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
