const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (tutorial) {
    //split string into an array of each word
    let words = tutorial.split(" ");
    //pass each word into another map function
    //returns a new array of upper cased words
    const titleCasedWords = words.map(function(word) {
      let upperCaseLetter = word.slice(0,1).toUpperCase();
      let upperCaseWord = word.replace(word[0], upperCaseLetter);
      return upperCaseWord
    })
    let titleCaseSentence = titleCasedWords.join(" ");
    return titleCaseSentence
  })};

let newArray = titleCased();

