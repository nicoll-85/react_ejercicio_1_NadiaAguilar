import React from "react";

function Loading({ show, children }) {
    return show ? children : <p>Loading...</p>;
  }
  
  export default Loading;