import React, { useState } from "react";

function TextInput(){
    const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} placeholder="Escribe aquí" />
      <h1>{inputText}</h1>
    </div>
  );
}

export default TextInput;