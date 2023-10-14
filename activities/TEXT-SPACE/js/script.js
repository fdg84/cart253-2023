/**
 * Hyperspace
 * Francis Ouellette
 * 
 * Stars Tutorial:
 * https://www.youtube.com/watch?v=p0I5bNVcYP8&ab_channel=BarneyCodes
 * 
 * 
 */

"use strict";

// /**
//  * TYPING TEXT (CODE)
//  */

// get element
const text = document.querySelector('.typing-text');

// words array
const words = [

  "░█░▓▒░▓█░▒▓░",
  "WELCOME TO SPACE.",
  "CLICK & EXPLORE."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 900;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    // ADD else STATEMENT to declare next event (above)

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

// // /**
// //  * NEXT PAGE (CODE)
// //  */

// // ADD if STATEMENT ?

// let nextPage = ();

// // Defining next page function
// function nextPage() {
//   <a href="stars.html"></a>
//  }
 
//  function mousePressed() {
//    // CALLING next page()
//    nextPage();
//  }


//////////////////////////////////////////////////

// // +++ NEW TEST +++

// let state = `title`;

// function mousePressed() {
//   if (state === `title`) {
//     state = `stars`;
//   }
// }

// function stars() {
//   nextPage();
// }

// function nextPage() {
//   <a href="stars.html"></a>
// }
