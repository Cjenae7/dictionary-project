import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔉
        </a>

        <span className="text">
          <br />
          {props.phonetic.text}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
