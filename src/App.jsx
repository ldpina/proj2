// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const cards = [
//     { question: "Translate 'What do you study in College?' to Spanish", answer: "¿Qué estudias en la universidad?" },
//     { question: "Translate 'hello' to Spanish.", answer: "Hola" },
//     { question: "Translate 'How are you?' to Spanish.", answer: "Cómo estás" },
//     { question: "Translate 'Where is the library?' to Spanish.", answer: "¿Dónde está la biblioteca?" },
//     { question: "Translate 'Want to work together on this asignment?' to Spanish.", answer: "¿Quieres trabajar juntos en esta tarea?" },
//     { question: "Translate 'Voy al baño' to Engligh.", answer: "I'm Going to the restroom" },
//     { question: "Translate '¿Me puedes ayudar?' to Spanish.", answer: "Can you help me?" },
//     { question: "Translate '¿Dónde puedo encontrar algún lugar para comer?' to Spanish.", answer: "Where can I find a place to eat" },
//     { question: "Translate '¡Eso fue divertido!' to Spanish.", answer: "That was fun!" },
//     { question: "Translate 'me lo pasé muy bien' to Spanish.", answer: "I had a great time" },
//   ]

//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleCardClick = () => {
//     setShowAnswer(!showAnswer);
//   }

//   const nextCard = () => {
//     let randomIndex = Math.floor(Math.random() * cards.length);
   
//     while(randomIndex === currentCardIndex){
//       randomIndex = Math.floor(Math.random() * cards.length);
//       if (randomIndex != currentCardIndex){
//         break;
//       }
//     }

//     setCurrentCardIndex(randomIndex);
//     setShowAnswer(false); 
//   }

//   return (
//     <div className = "App">
//       <h2>Flash Cards!</h2>
//       <h4>Test your knowledge on!</h4>
//       <h5>{`Total cards: ${cards.length}`}</h5>
      
//       <div className = "card" onClick={handleCardClick}>
//         {showAnswer ? cards[currentCardIndex].answer : cards[currentCardIndex].question}
//       </div>
      
//       <button class="next" onClick={nextCard}>⭢</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const cards = [
    { question: "Translate 'What do you study in College?' to Spanish", answer: "¿Qué estudias en la universidad?" },
    { question: "Translate 'hello' to Spanish.", answer: "Hola" },
    { question: "Translate 'How are you?' to Spanish.", answer: "Cómo estás" },
    { question: "Translate 'Where is the library?' to Spanish.", answer: "¿Dónde está la biblioteca?" },
    { question: "Translate 'Want to work together on this asignment?' to Spanish.", answer: "¿Quieres trabajar juntos en esta tarea?" },
    { question: "Translate 'Voy al baño' to English.", answer: "I'm Going to the restroom" },
    { question: "Translate 'Adios!' to English.", answer: "Goodbye!" },
    { question: "Translate '¿Dónde puedo encontrar algún lugar para comer?' to English.", answer: "Where can I find a place to eat" },
    { question: "Translate '¡Eso fue divertido!' to English.", answer: "That was fun!", color:"red"},
    { question: "Translate 'me lo pasé muy bien' to English.", answer: "I had a great time" },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  }

  const nextCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    
    while (randomIndex === currentCardIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }

    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
  }

  const chngBackgroundColor = ()=> {
    const currQuestion = cards[currentCardIndex].question;
    if (currQuestion.includes("?") && currQuestion.includes("Spanish") ){
      return '#FF6633';
      }
      else if (currQuestion.length < 42){
        return '#99CC66'
      }
      else if (currQuestion.includes("English")){
        return '#FFFF99'
      }
    return 'blue';
  }

  return (
    <div className="App">
      <h2>Spanish Flash Cards!</h2>
      <br/>
      <h4>Test your strength in utilzing key phrases that would be used at a spanish speaking university!</h4>
      <br/>
      <h5>{`Total cards: ${cards.length}`}</h5>
      
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick} style={{backgroundColor: chngBackgroundColor()}}>
        <div className="front">
          {cards[currentCardIndex].question}
        </div>
        <div className="back">
          {cards[currentCardIndex].answer}
        </div>
      </div>
      
      <button className="next" onClick={nextCard}>⭢</button>
    </div>
  );
}

export default App;
