import { embed } from "@trufflehq/sdk";
import { useState } from "react";
import TetrisGame from "./components/Tetris";

function App() {
    embed.setSize("500px", "600px");
    embed.setPosition("73.2%", "7%");

    if (!document.referrer) {
        embed.hide();
    }

    const [visible, setVisible] = useState(true);
    if (visible) {
        return (
            <div className="h-screen w-full bg-[#191919] rounded-xl flex flex-col">
                <div className="bottom-[6.5rem] left-2 fixed z-10">
                    <button
                        className="h-24 w-24 bg-red-600 transition-all hover:bg-red-500 flex justify-center items-center p-1 rounded-xl text-white font-semibold fixed"
                        onClick={() => setVisible(!visible)}
                    >
                        Hide Tetris Game
                    </button>
                </div>
                <TetrisGame />
            </div>
        );
    } else {
        return (
            <div className="h-screen w-full rounded-xl flex flex-col p-1">
                <div className="pl-[75.5%]">
                    <button
                        className="h-24 w-24 bg-green-600 transition-all hover:bg-green-500 flex justify-center items-center p-1 rounded-xl text-white font-semibold fixed"
                        onClick={() => setVisible(!visible)}
                    >
                        Show Tetris Game
                    </button>
                </div>
            </div>
        );
    }
}

export default App;

/*

  SHOW
  localStorage.setItem(
  "truffle:devExtensionMappings",
  JSON.stringify([
    {
      iframeUrl: "http://localhost:5173",
      domAction: null,
      defaultLayoutConfigSteps: [
        { action: "querySelector", value: "body" },
        { action: "appendSubject", value: null },
        { action: "useSubject", value: null },
        {
          action: "setStyle",
          value: {
            position: "fixed",
            width: "600px",
            height: "600px",
            top: "100px",
            left: "100px",
            "z-index": 1000,
            },
          },
        ],
      },
    ])
  );

  HIDE
  localStorage.removeItem("truffle:devExtensionMappings")

*/
