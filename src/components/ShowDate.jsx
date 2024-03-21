import React from "react";

function ShowDate() {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return currentDate.toLocaleDateString('es-ES', options);
    };
  
    return <span>{getCurrentDate()}</span>;
  }
  
  export default ShowDate;