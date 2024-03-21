import React from "react";

function ShowMessage({ showMessage }) {
    return showMessage ? <p>Ahora puedes leer esto</p> : null;
  }
  
  export default ShowMessage;
  