import React from "react";
import "./main.css";
export const Sentence = ({ sentences,setNewSentence }) => {
  return (
    <> 
       
      {!sentences
        ? "No data found"
        : sentences.map((sentence, index) => (
            <div
              key={index}
              className="grid-item"
              style={{
                fontWeight: sentence.bold ? "bold" : "normal",
                fontStyle: sentence.italic ? "italic" : "normal",
                textDecoration: sentence.underline ? "underline" : "none",
                fontSize: sentence.fontSize,
                color: sentence.color,
              }}
            >
              <div className="btn-container">
                <button
                  className="bold-btn"
                  onClick={() => setNewSentence(index,"style", "bold")}
                >
                  Bold
                </button>
                <button
                  className="italic-btn"
                  onClick={() => setNewSentence(index,"style", "italic")}
                >
                  Italic
                </button>
                <button
                  className="underline-btn"
                  onClick={() => setNewSentence(index, "style", "underline")}
                >
                  Underline
                </button>
                <input
                  type="number"
                  className="num-field"
                  value={parseInt(sentence.fontSize)}
                  onChange={(e) => setNewSentence(index, "fontSize", e.target.value)}
                />
                <input
                  type="text"
                  className="color-field"
                  value={sentence.color}
                  onChange={(e) => setNewSentence(index, "color", e.target.value)}
                />
              </div>
              <div className="sentence">{sentence.text}</div>
            </div>
          ))}
    </>
  );
};
