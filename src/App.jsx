
import React,{ useState } from 'react';
import Greeting from './components/Greeting';
import ShowName from './components/ShowName';
import ShowDate from './components/ShowDate';
import ShowMessage from './components/ShowMessage';
import Loading from './components/Loading';
import Button from './components/Button';
import TextInput from './components/TextInput';
import PasswordInput from './components/PasswordInput';
import Counter from './components/counter';
import StringManipulator from './components/StringManipulator';
import './App.css'


function App() {

  const [showMessage, setShowMessage] = useState(true);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const [loading, setLoading] = useState(true);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  const handleClick = () => {
    console.log('holi');
    setLoading(!loading);
  };

  const user = { name: 'Nadia Aguilar' };

  return (
    <div className="App">
      <Greeting />
      <ShowName user={user} />
      <ShowDate/> <br />
      <hr />
      {/* <button onClick={toggleLoading}>Mostrar u Ocultar mensaje</button> */}
      <Button onClick={toggleLoading} onClickHandler={handleClick}>Mostrar u Ocultar Mensaje</Button>
      <Loading show={loading}>
        <ShowMessage showMessage={true} />
      </Loading>
      <hr />
      <TextInput />
      <hr />
      <PasswordInput />
      <hr />
      <Counter />
      <hr />
      <StringManipulator />
    </div>
  );
}

export default App;
