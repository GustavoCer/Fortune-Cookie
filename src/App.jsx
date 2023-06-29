import "./App.css";
import FortuneCookie from "./components/FortuneCookie";
import phrases from "./Data/phrases.json";
import { useState } from "react";

function App() {
  const [lucky, setLucky] = useState(0);
  const [randomImg, setrandomImg] = useState(0);
  let img = ["/fondo1.jpg" , "/fondo2.jpg" , "/fondo3.jpg" , "/fondo4.jpg"];
  
  const generateImg = () => {
    setrandomImg(Math.floor(Math.random() * 4));
  };

  const generateText = () => {
    setLucky(Math.floor(Math.random() * 15));
  };

  const changeLucky = () => {
    generateImg();
    generateText();
  };

  document.body.style.backgroundImage = `url(${img[randomImg]})`;

  return (
    <>
    <FortuneCookie data={phrases[lucky]} />
    <div className="center">
    <button onClick={changeLucky} className="button">
      <p>Probar suerte de nuevo</p>
      <i className="again" class='bx bx-refresh'></i>

    </button>
    </div>
    </>
  );
}

export default App;