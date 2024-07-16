import React, { useState, useEffect } from 'react';
import './Typetest.css'

function Typetest({ testText }) {

  const wordsTyped = testText.split(' ');

  const [key, setKey] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [chance, setChance] = useState(1);
  const [linePoint, setLinePoint] = useState([12])

  const [wordLetterIndex, setWordLetterIndex] = useState(() => {
    const savedPairs = localStorage.getItem('wordLetterIndex');
    return savedPairs ? JSON.parse(savedPairs) : [{ "word": 0, "letter": 0 }];
  });

  useEffect(() => {
    localStorage.setItem('wordLetterIndex', JSON.stringify(wordLetterIndex));
  }, [wordLetterIndex]);



  // Initialize total char / letter from localStorage
  const [correct, setCorrect] = useState(() => {
    const savedcount = localStorage.getItem('correct');
    return savedcount !== null ? parseInt(savedcount, 10) : 0;
  });
  // Update localStorage whenever char changes
  useEffect(() => {
    localStorage.setItem('correct', correct);
  }, [correct]);


  //  count incorrect
  const [incorrect, setIncorrect] = useState(() => {
    const savedIncorrect = localStorage.getItem('incorrect');
    return savedIncorrect !== null ? parseInt(savedIncorrect, 10) : 0;
  });
  // Update local storage whenever 'incorrect' changes
  useEffect(() => {
    localStorage.setItem('incorrect', incorrect);
  }, [incorrect]);


  // backspace functionality
  const backspaceFunc = () => {
    if (wordLetterIndex.length < 1) return;

    // Get the current typed text information
    const typedText = [...wordLetterIndex];

    let word;
    let letter;
    // Remove classes from the last typed letter
    const lastTyped = typedText.pop();
    if (lastTyped) {
      const { word: word_remove, letter: letter_remove } = lastTyped;
      word = word_remove
      letter = letter_remove
      document.getElementById(`${word_remove}-${letter_remove}`).classList.remove('correct-letter', 'current-letter', 'wrong-letter');
    }

    // Remove classes from the previous typed letter
    const secondLastTyped = typedText[typedText.length - 1];
    if (secondLastTyped) {
      const { word: word_remove2, letter: letter_remove2 } = secondLastTyped;
      document.getElementById(`${word_remove2}-${letter_remove2}`).classList.remove('correct-letter', 'current-letter', 'wrong-letter');
    }

    // Update the wordLetterIndex state
    setWordLetterIndex(typedText);

    // Update the indices to reflect the current position
    if (typedText.length > 0) {
      const currentTyped = typedText[typedText.length - 1];
      setWordIndex(currentTyped.word);
      setLetterIndex(currentTyped.letter);
    } else {
      setWordIndex(0);
      setLetterIndex(0);
    }
    
    const currentTyped = typedText[typedText.length - 1];
    const nextTop = document.getElementById(`${currentTyped.word}-${currentTyped.letter}`).offsetTop

    if (nextTop !== currentTop) {
      console.log('Moved to next line', nextTop, currentTop);
      console.log(nextTop, "{{{{{{{{{}}}}}}}}}", currentTop)
      const lineHeight = nextTop - currentTop;
      // currentLineTop = nextTop;
  
      // Scroll the container up by one line height
      const container = document.querySelector('.typing-text-container')
      console.log(container, "p")
      console.log(lineHeight, "--------")
      container.scrollTop += lineHeight;
  
      setLinePoint([...linePoint, nextTop]);
      setCurrentTop(nextTop);
      console.log('currrrrr', currentTop)
    }
  };




// Function to add a new word-letter pair
const addWordLetterPair = (word, letter) => {
  setWordLetterIndex([...wordLetterIndex, { "word": word, "letter": letter }]);
};
useEffect(() => {
  if (wordLetterIndex.length > 0) {

    const indexes = wordLetterIndex[wordLetterIndex.length - 1]
    const letter_container = document.getElementById(`${indexes.word}-${indexes.letter}`)
    letter_container.classList.add('current-letter')
  }
}, [wordLetterIndex, wordIndex, letterIndex])

const handleKeyDown = (event) => {
  const allowedKeys = /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<> ]$/; // Regular expression for allowed keys

  if (event.key === 'Backspace') {
    console.log('Backspace key pressed');
    backspaceFunc()
    // You can add your custom logic here
  }

  if (event.key.match(allowedKeys)) {
    setKey(event.key);
    console.log('Key pressed: ', event.key);
    typeCorrectionChecker(wordIndex, letterIndex, event.key)
  }
};

useEffect(() => {
  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [wordIndex, letterIndex]);



// line up
const [currentTop, setCurrentTop] = useState(12);

const updateLetterWordIndex = (wordIdx, letterIdx) => {
  console.log('+++++++')
  const curr_Letter = document.getElementById(`${wordIdx}-${letterIdx}`)
  const next_Letter = document.getElementById(`${wordIdx}-${letterIdx + 1}`)
  console.log(next_Letter, "{{{")
  if (next_Letter === null) {
    addWordLetterPair(wordIdx + 1, 0)
  }
  else if (curr_Letter === " " || curr_Letter === "Tab" || curr_Letter.innerText === "&nbsp;") {
    addWordLetterPair(wordIdx + 1, 0)
  } else {
    addWordLetterPair(wordIdx, letterIdx + 1)
    console.log("UU fasles")
  }

}


// testing logic
const typeCorrectionChecker = (wordIdx, letterIdx, clicked_key) => {
  console.log(wordIdx, letterIdx, clicked_key, "0000000000000000")
  const letter_container = document.getElementById(`${wordIdx}-${letterIdx}`)

  console.log(letter_container.innerText, "00000", clicked_key)

  const nextTop = letter_container.offsetTop;

  // let currentTop = document.getElementById('0-0').offsetTop
  if (nextTop !== currentTop) {
    console.log('Moved to next line', nextTop, currentTop);
    console.log(nextTop, "{{{{{{{{{}}}}}}}}}", currentTop)
    const lineHeight = nextTop - currentTop;
    // currentLineTop = nextTop;

    // Scroll the container up by one line height
    const container = document.querySelector('.typing-text-container')
    console.log(container, "p")
    console.log(lineHeight, "--------")
    container.scrollTop += lineHeight;

    setLinePoint([...linePoint, nextTop]);
    setCurrentTop(nextTop);
    console.log('currrrrr', currentTop)
  }

  console.log('[][][]', letter_container.innerText, '===', clicked_key)
  // if (letter_container.innerText === clicked_key || (letter_container.innerText === '\u00A0' && clicked_key === ' ')) {
  //   console.log("chanceeeeeeeeee",chance)
  //   setChance(1)
  //   console.log("chanceeeeeeeeee",chance)
  // }

  console.log('----------')
  // if (chance === 1) {
  //   console.log('+++++++')
  //   const curr_Letter = document.getElementById(`${wordIdx}-${letterIdx}`)
  //   const next_Letter = document.getElementById(`${wordIdx}-${letterIdx + 1}`)
  //   console.log(next_Letter, "{{{")
  //   if (next_Letter === null) {
  //     addWordLetterPair(wordIdx + 1, 0)
  //   }
  //   else if (curr_Letter === " " || curr_Letter === "Tab" || curr_Letter.innerText === "&nbsp;") {
  //     addWordLetterPair(wordIdx + 1, 0)
  //   } else {
  //     addWordLetterPair(wordIdx, letterIdx + 1)
  //     console.log("UU fasles")
  //   }
  // }



  if (letter_container.innerText === clicked_key || (letter_container.innerText === '\u00A0' && clicked_key === ' ')) {

    // type audio
    if (parseInt(localStorage.getItem('checked_btn1')) === 1) {
      console.log("wooork")
      const audio = new Audio('/typing.mp3');
      audio.play();
    }

    letter_container.classList.remove('wrong-letter')
    letter_container.classList.remove('current-letter')
    letter_container.classList.add('correct-letter')

    updateLetterWordIndex(wordIdx, letterIdx)
    // console.log(letter_container.innerText, "UUUU", clicked_key)

    if (clicked_key === " " || clicked_key === "Tab" || letter_container.innerText === "&nbsp;") {
      setWordIndex(wordIdx + 1)
      setLetterIndex(0)
      console.log(" UUU tttrue")

    } else {
      setLetterIndex(letterIdx + 1)
      console.log("UU fasles")
    }
    setChance(1)
    setCorrect(correct + 1)
  }
  else if (letter_container.innerText !== clicked_key && wordIdx === 0 && letterIdx === 0) {
    setLetterIndex(letterIdx + 1)
    letter_container.classList.remove('correct-letter')
    letter_container.classList.add('wrong-letter')
    letter_container.classList.remove('current-letter')

    updateLetterWordIndex(wordIdx, letterIdx)


    // error audio 
    if (parseInt(localStorage.getItem('checked_btn2')) === 1) {
      const audio = new Audio('/error.mp3');
      audio.play();
    }
    setChance(0)

  }
  else {
    // error audio
    if (parseInt(localStorage.getItem('checked_btn2')) === 1) {
      const audio = new Audio('/error.mp3');
      audio.play();
    }
    if (chance === 1) {
      letter_container.classList.remove('correct-letter')
      letter_container.classList.add('wrong-letter')
      letter_container.classList.remove('current-letter')
      setIncorrect(incorrect + 1)
      updateLetterWordIndex(wordIdx, letterIdx)



      // setLetterIndex(letterIdx + 1)
      console.log(letter_container.innerText, "LLLLLLLLLL", clicked_key)
      if (letter_container.innerText === "Tab" || letter_container.innerText === " " || letter_container.innerHTML === "&nbsp;") {
        setWordIndex(wordIdx + 1)
        setLetterIndex(0)
        console.log("tttrue")
      } else {
        setLetterIndex(letterIdx + 1)
        console.log("fffalse")
      }
      setChance(0)
      setIncorrect(incorrect + 1)
    }
  }
}

return (
  <>
    <div>
      <div className="typing-text-container">
        {wordsTyped.map((word, idx) => (
          <div key={idx} className="word-container">
            {
              word.split('').map((letter, i) => (
                <div className='letter-container' key={i} id={`${idx}-${i}`} >{letter}</div>
              ))
            }
            <div className='letter-container' key={`${idx}-${word.length}`} id={`${idx}-${word.length}`} >{'\u00A0'}</div>
          </div>
        ))
        }
      </div>
    </div>

  </>
);
}

export default Typetest;
