import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 bg-gray-950">
      <h1 className="text-4xl mt-8 text-gray-400">Estas michifectada </h1>
      <h2 className="text-xl  text-gray-400">miau miau :3</h2>

      <div className="w-full h-full ">
        <img
          className="w-full h-full object-cover"
          src="https://c8.alamy.com/compes/2ad2fw3/internet-viral-meme-imagen-conceptual-de-una-imagen-de-un-gato-superpuesta-en-ilustraciones-de-virus-lo-que-representa-un-meme-de-internet-o-video-viral-2ad2fw3.jpg"
        />
      </div>
    </div>
  );
}

export default App;
