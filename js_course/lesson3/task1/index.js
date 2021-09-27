// // // // +17; // 17
// // // // +'77'; // 77
// // // // +true; // 1
// // // // +false; // 0
// // // // +'text'; // NaN
// // // // // ============= Binar + ===============
// // // // 10 + '5'; // '105'
// // // // 1 + 3 + '7'; // '47'
// // // // '24' / 4; // 6
// // // // 5 * '7'; // 35
// // // // '45' - '14'; // 31
// // // // 'five' * 3; // NaN
// // // // 17 / 0; // infinity
// // // // typeof Infinity; // Number
// // // // undefined + 1; // NaN
// // // // null + 7; // 7
// // // // 7 - null; // 7
// // // // 'text' + null; // 'textnull'
// // // // 'text' + undefined; // 'textundefined'
// // // // // ====== increment =======
// // // // let num = 1;
// // // // const x = num++; // x = 1 // num = 2

// // // // Number(null); // 0
// // // // Number(undefined); // NaN
// // // // Number('   17d   '); // NaN

// // // // Boolean(''); // false
// // // // Boolean(' '); // true
// // // // 17 == '17'; // true
// // // // 17 === '17'; // false
// // // // 'a' < 'b'; // true
// // // // 'aab' >= 'aaa'; // true
// // // // 'a' == 'A'; // false
// // // // 'a' > 'A'; // true
// // // // 0 == ''; // true
// // // // 0 === ''; // false
// // // // 0 == null; // false
// // // // 0 === null; // false
// // // // undefined == null; // true
// // // // undefined === null; // false

// // // // //  =======  Compare operators || ========

// // // // 'text' || false; // 'text
// // // // let o = true || 'text'; // true
// // // // let k = 'text' || true; // 'text'
// // // // console.log(o);
// // // // console.log(k);
// // // // const customAmount = null;
// // // // const defaultAmount = 17;
// // // // const amount = customAmount || defaultAmount;
// // // // // amount = 17
// // // // const cAmount = 1;
// // // // const amount1 = cAmount || defaultAmount;
// // // // // amount1 = 1

// // // // // ====== && ===========
// // // // 'text' && false; // false
// // // // true && 'text'; // text
// // // // undefined && null && 0 && '' && null; // undefined - first false

// // // // // !!'text'-(true) same as Boolean('text')-(tru)

// // // +17;
// // // console.log('+17:', +17);
// // // +'77';
// // // console.log("+'7':", +77);

// // // // Бинарный плюс складывает строки или прибавляет числа
// // // 10 + '5';
// // // console.log('10 + "5":', 10 + '5');
// // // 'some' + 'text';
// // // console.log("'some' + 'text':", 'some' + 'text');

// // // // Математические операции с undefined возвращают NaN
// // // undefined + 1;
// // // console.log('undefined + 1:', undefined + 1);
// // // null + 8;
// // // console.log('null + 8:', null + 8);
// // // undefined + '5';
// // // console.log("undefined + '5':", undefined + '5');
// // // 7 - null;
// // // console.log('7 - null:', 7 - null);
// // // 5 - undefined;
// // // console.log('5 - undefined:', 5 - undefined);
// // // 'text' + null;
// // // console.log("'text' + null:", 'text' + null);

// // // // Постфиксная и префиксная форма записи
// // // let num = 17;
// // // ++num;
// // // console.log('++num:', ++num);
// // // num++;
// // // console.log('num++:', num++);

// // // // математические операторы приводят операнды к числам
// // // const a = 17;
// // // const b = -a;
// // // console.log(b);
// // // '24' / 4;
// // // console.log("'24' / 4:", '24' / 4);
// // // 18 * '3';
// // // console.log("18 * '3':", 18 * '3');
// // // '9' - '3';
// // // console.log("'9' - '3':", '9' - '3');
// // // 'seventeen' / 3;
// // // console.log("'seventeen' / 3:", 'seventeen' / 3);
// // // 4 * 'four';
// // // console.log("4 * 'four':", 4 * 'four');
// // // 17 / 0;
// // // console.log('17 / 0:', 17 / 0);
// // // code below must be finished ;)

// // /* cast to string */
// // console.log('17 to string is ' + String(17));
// // console.log('-17.17 to string is ' + String(-17.17));
// // console.log('false to string is ' + String(false));
// // console.log('null to string is ' + String(null));
// // console.log('undefined to string is ' + String(undefined));
// // console.log('0 to string is ' + String(0));

// // /* cast to number */
// // console.log("'17' to number is " + Number('17'));
// // console.log('true to number is ' + Number(true));
// // console.log('false to number is ' + Number(false));
// // console.log('null to number is ' + Number(null));
// // console.log('undefined to number is ' + Number(undefined));
// // console.log("'   20   ' to number is " + Number('   20   '));
// // console.log("'      ' to number is " + Number('      '));
// // console.log("'   30d   ' to number is " + Number('   30d   '));

// // /* cast to boolean */
// // console.log('null to boolean is ' + Boolean(null));
// // console.log('undefined to boolean is ' + Boolean(undefined));
// // console.log('0 to boolean is ' + Boolean(0));
// // console.log('-0 to boolean is ' + Boolean(-0));
// // console.log('NaN to boolean is ' + Boolean(NaN));
// // console.log("'' to boolean is " + Boolean(''));
// // console.log("' ' to boolean is " + Boolean(' '));
// // console.log('17 to boolean is ' + Boolean(17));
// // console.log("'Hello' to boolean is " + Boolean('Hello'));

// /* eslint-disable */

// /* Результатом сравнения является булевое значение */

// /* Сравнение чисел */
// const a = 17;
// const b = 5;
// console.log('a > b:', a > b);
// console.log('a <= b:', a <= b);
// console.log('a == b:', a == b);
// console.log('a != b:', a != b);

// /* Сравнение строк */
// console.log("'a' < 'b':", 'a' < 'b');
// console.log("'ab' > 'a':", 'ab' > 'a');

// /* При сравнении переменных разных типов они преобразуются в числа */
// console.log("'17' > 1:", '17' > 1);

// /* Строгое сравнение */
// console.log('17 === 1:', 17 === 1);
// console.log('17 === 17:', 17 === 17);
// console.log("17 === '17':", 17 === '17');
// console.log('17 === true:', 17 === true);
// console.log("'0' === '':", '0' === '');
// console.log('true === false:', true === false);
// console.log('true === true:', true === true);
// console.log('null === undefined:', null === undefined);
// console.log('false === 0:', false === 0);

// /* Нестрогое сравнение */
// console.log("17 == '17':", 17 == '17');
// console.log("'0' == '':", '0' == '');
// console.log("0 == '':", 0 == '');
// console.log('null == undefined:', null == undefined);
// console.log('false == 0:', false == 0);

// /* Осторожно c null и undefined */
// console.log('undefined == null:', undefined == null);
// console.log('undefined == 0:', undefined == 0);
// console.log('null == 0:', null == 0);
// console.log('undefined < 0:', undefined < 0);
// console.log('undefined > 0:', undefined > 0);
/* eslint-disable */

/* оператор || (OR) */
console.log('false || true:', false || true);
console.log('false || true || false:', false || true || false);
console.log('false || false || false:', false || false || false);

/* оператор && (AND) */
console.log('false && true:', false && false);
console.log('false && true && false:', false && true && false);
console.log('true && true && true:', true && true && true);

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
console.log("'text' || false:", 'text' || false);
console.log("true || 'text':", true || 'text');
console.log(
  "undefined || null || 0 || '' || null:",
  undefined || null || 0 || '' || null
);

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
console.log('amount:', amount);
/* && находит первое ложное значение */
console.log("'text' && false:", 'text' && false);
console.log("true && 'text':", true && 'text');
console.log(
  "undefined && null && 0 && '' && null:",
  undefined && null && 0 && '' && null
);

/* оператор отрицания (OR) */
console.log('!true:', !true);
console.log('!false:', !false);
console.log("!'text':", !'text');
console.log("!!'text':", !!'text');
