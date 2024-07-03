//01
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
const RegExpPattern1 =/(\d+|\D+)+/ig;
console.log(ip.match(RegExpPattern1));
console.log("--------------------------------------------------");


//02
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
const RegExpPattern2 =/^(Os)\d*$(o)/ig;
console.log(specialNames.match(RegExpPattern2));
let specialNamesRe = /\b(Os)\d*O/g;
console.log(specialNames.match(specialNamesRe));
console.log("--------------------------------------------------");



//03
let phone = "+(995)-123 (4567)";
const RegExpPattern3 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(RegExpPattern3));
console.log("--------------------------------------------------");



//04
let re1 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
  Quantifiers
  n?    => zero or one
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
   . => matches any character, except newline or other line terminators.
  i => case-insensitive
*/

console.log("--------------------------------------------------");



//05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re =/\d{2}\s?-?\s?\/?\d{2}s?-?\s?\/?\d{2,}/g;
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

console.log("--------------------------------------------------");
//06
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re3 = /(https?:\/\/)?([\w]+\.)?([\w]+)\.\w+(\.\w+)?\/?.*/g;

console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));