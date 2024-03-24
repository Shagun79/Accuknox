import React, { useState } from "react";
import "./App.css";
import jsonData from "./component/data.json";
import { Sentence } from "./component/sentence";
import "./component/main.css";
function SentenceModifier() {
  const [sentences, setSentences] = useState(jsonData);

  const setStyle = (index, style) => {
    const newSentence = [...sentences];
    newSentence[index][style] = !newSentence[index][style];
    setSentences(newSentence);
  };

  const setFontSize = (index, newSize) => {
    const newSentence = [...sentences];
    newSentence[index].fontSize = newSize + "px"; // Add "px" unit here
    setSentences(newSentence);
  };

  const setColor = (index, color) => {
    const newSentence = [...sentences];
    newSentence[index].color = color;
    setSentences(newSentence);
  };

  return (
    <>
    <h1 className="heading"> AccuKnox Assigment</h1>
    <div className="grid-container">
      <Sentence
        sentences={sentences}
        setColor={setColor}
        setFontSize={setFontSize}
        setStyle={setStyle}
      />
    </div>
    </>
  );
}

export default SentenceModifier;
