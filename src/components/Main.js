import React, { useState } from "react";
import Text from "./Text";

const Main = () => {
  const [word, setWord] = useState("");
  const [update, setUpdate] = useState("");
  const handleChange =(e)=>{
    setWord(e.target.value)
  }
  const handleWord = (event) => {
    if (event.key === "Enter") {
      setUpdate(word);
    }
  };
  return (
    <div className="main-box">
      <Text text="Google" className="google" />
      <input type="text" value={word} onChange={handleChange} onKeyDown={handleWord} />
      <p>{update}</p>
      <div className="search-text">
        <Text text="Google Search" className="search-text-box" />
        <Text text="I'm Feeling Lucky" className="search-text-box" />
      </div>
      <Text
        text="Google offered in: Hausa Igbo Ede Yoruba Nigerian Pidgin"
        className="lang"
      />
    </div>
  );
};

export default Main;
