import React,{useState} from "react";

function PasswordInput() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleInputChange = (event) => {
      setPassword(event.target.value);
    };
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div>
        <input type={showPassword ? 'text' : 'password'} value={password} onChange={handleInputChange} placeholder="Ingrese su contraseña" />
        <button onClick={toggleShowPassword}>{showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}</button>
        {showPassword && <p>Contraseña: {password}</p>}
      </div>
    );
  }
  
  export default PasswordInput;