import React from 'react'
import './Result.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClockRotateLeft,faVolumeHigh,faVideoSlash} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Result() {

  const testTime = localStorage.getItem('testTime')  

  const savedCount = localStorage.getItem('correct');
  const savedIncorrect = localStorage.getItem('incorrect');
  
  console.log(savedCount,"=00000=",savedIncorrect)
  
  const timeInMin = testTime/60
  const WPM = ((savedCount / 5) / timeInMin).toFixed(0)
  const CPM = (savedCount) / timeInMin
  console.log(savedCount,"=08888880=",savedIncorrect)
  const totalCharType = parseInt(savedCount) + parseInt(savedIncorrect)
  console.log("=0***************0=",totalCharType)
  const accuracy = ((savedCount / totalCharType) * 100).toFixed(1);
  console.log(savedCount,"=08888880=",savedIncorrect)
  console.log(accuracy)
  const netSpeed = WPM * (accuracy/100)

  console.log(accuracy , "===" , WPM)

  function reset_counts(){
    localStorage.setItem('correct', 0);
    localStorage.setItem('incorrect', 0);
    localStorage.setItem('wordLetterIndex', JSON.stringify([{"word" : 0, "letter" : 0}]));
  }
 
  const testObj = {
    testTime: timeInMin,
    correct: savedCount,
    incorrect: savedIncorrect,
    accuracy: accuracy,
    wpm: WPM,
    cpm: CPM,
    netSpeed: netSpeed
  }


  let allTests;

  // Attempt to retrieve and parse 'allTests' from localStorage
  try {
    allTests = JSON.parse(localStorage.getItem('allTests')) || [];
  } catch (e) {
    allTests = [];
  }
  
  // Function to compare objects
  const areObjectsEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  
  // Check if testObj is already present in allTests
  const testExists = allTests.some(test => test !== null && areObjectsEqual(test, testObj));
  
  if (!testExists) {
    // Push the new test object to the array
    allTests.push(testObj);
    
    // Save the updated array back to localStorage
    localStorage.setItem('allTests', JSON.stringify(allTests));
  }
  
  return (
    <div >
        <div className="typing-test-header">
      <div className="typing-test-heading">Typin.com</div>
      <div className="typing-test-type">1 Minute Typing Test</div>
      <div className="typing-test-feature">
        <div className="typing-timer">00:00</div>
        <div className="typing-setting-icons">
          <div><FontAwesomeIcon icon={faClockRotateLeft} className='typing-setting-icon-btn'/></div>
          <div><FontAwesomeIcon icon={faVolumeHigh} className='typing-setting-icon-btn'/></div>
          {/* <div><FontAwesomeIcon icon={faVideoSlash} className='typing-setting-icon-btn'/></div> */}
        </div>
      </div>
        </div>

    
        <div className='result-container'>
        <div className='result-upper-container'>
            <div className="result-img-container">
                <img src="	https://www.typing.com/dist/student/images/mascot/app/mascot-b.svg" alt="typing-test-1-min" className="result-img" />
            </div>
            <div className='talk-arrow-container'>
            <div className='talk-arrow'>
                <div><div></div></div>
                <div></div>
            </div>

            </div>
            <div className='result-content-container'>
                <h3 className="result-content-heading">Typing Test Complete</h3>
                <div className="result-content-para">You typed <span>{timeInMin}</span> min typing test </div>
                <div className="result-content-desc">Your speed was <span>  {WPM} WPM  </span>with <span> {accuracy}%</span> accuracy!</div>
                <div className='result-content-overall-judgement'>
                    <div className='result-content-overall-image'><img src="https://tse1.mm.bing.net/th?id=OIP.oOialDe9E5LV4rdDUXEMywHaFj&pid=Api&P=0&h=180" alt="" /></div>
                <div className='result-content-progress-bar'>
                     <div className="progress-bar-progress" style={{ width: `${accuracy}%` }}></div>
                </div>
                </div>

            </div>
            
        </div>
        <hr />
        <div className='result-routing-container'>
            <div className="back-to-typing"><Link to="/" onClick={()=>{reset_counts()}}>Back to Typing Tests</Link></div>
            <div className="tryagin-print-btns">
                <div className="tryagain-btn result-content-btn"><Link to='/typingbox' onClick={()=>{reset_counts()}}>Try Again</Link></div>
                <div className="print-btn result-content-btn"><Link >Print Certificate</Link></div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Result
