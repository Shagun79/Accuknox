import React, { useState } from "react";
import "./App.css";
import jsonData from "./component/data.json";
import { Sentence } from "./component/sentence";
import "./component/main.css";
function SentenceModifier() {
  const [sentences, setSentences] = useState(jsonData);
  const setNewSentence = (index, property, value) => {
    const newSentence = [...sentences];
    switch (property) {
      case "style":
        newSentence[index][value] = !newSentence[index][value];
        break;
      case "fontSize":
        newSentence[index].fontSize = value + "px";
        break;
      case "color":
        newSentence[index].color = value;
        break;
      default:
        break;
    }
    setSentences(newSentence);
  };

  return (
    <>
    <h1 className="heading"> AccuKnox Assigment</h1>
    <div className="grid-container">
      <Sentence
        sentences={sentences}
        setNewSentence={setNewSentence}
      />
    </div>
    </>
  );
}

export default SentenceModifier;
