import React from "react";
import "./main.css";
export const Sentence = ({ sentences, setStyle, setFontSize, setColor }) => {
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
                  onClick={() => setStyle(index, "bold")}
                >
                  Bold
                </button>
                <button
                  className="italic-btn"
                  onClick={() => setStyle(index, "italic")}
                >
                  Italic
                </button>
                <button
                  className="underline-btn"
                  onClick={() => setStyle(index, "underline")}
                >
                  Underline
                </button>
                <input
                  type="number"
                  className="num-field"
                  value={parseInt(sentence.fontSize)}
                  onChange={(e) => setFontSize(index, e.target.value)}
                />
                <input
                  type="text"
                  className="color-field"
                  value={sentence.color}
                  onChange={(e) => setColor(index, e.target.value)}
                />
              </div>
              <div className="sentence">{sentence.text}</div>
            </div>
          ))}
    </>
  );
};
