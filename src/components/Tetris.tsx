import { useEffect, useState } from "react";
import Tetris from "react-tetris";
import "./Tetris.css";

const TetrisGame = () => {
    const [highscore, setHighscore] = useState(
        localStorage.getItem("cosmic:tetris-embed:highscore") ?? 0
    );

    useEffect(() => {
        setHighscore(
            localStorage.getItem("cosmic:tetris-embed:highscore") ?? 0
        );
    });

    const restart = (controller: any, points: any) => {
        if (points > highscore) {
            setHighscore(points);
            localStorage.setItem("cosmic:tetris-embed:highscore", points);
        }
        controller.restart();
    };

    return (
        <div className="flex flex-row ">
            <Tetris>
                {({
                    HeldPiece,
                    Gameboard,
                    PieceQueue,
                    points,
                    linesCleared,
                    state,
                    controller,
                }) => (
                    <div className="flex">
                        <div className="p-1 flex flex-row gap-2">
                            <div>
                                <div className="border-2 border-blue-500 p-2 text-center rounded-xl flex flex-col items-center">
                                    <p className="text-white font-bold text-xl mb-2">
                                        Held
                                    </p>
                                    <HeldPiece />
                                </div>

                                <div className="text-white font-semibold">
                                    <p>
                                        Points:{" "}
                                        <span className="text-[#4bb6e3]">
                                            {points}
                                        </span>
                                    </p>
                                    <p>
                                        Lines Cleared:{" "}
                                        <span className="text-[#4bb6e3]">
                                            {linesCleared}
                                        </span>
                                    </p>
                                    <p>
                                        Highscore:{" "}
                                        <span className="text-[#4bb6e3]">
                                            {highscore}
                                        </span>
                                    </p>
                                    <button
                                        onClick={controller.pause}
                                        className="bg-blue-600 p-2 rounded-xl hover:bg-blue-500 transition-all text-md mt-4"
                                    >
                                        Pause/Controls
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Gameboard />
                                <div className="border-2 border-blue-500 p-2 text-center rounded-xl flex flex-col items-center">
                                    <p className="text-white font-bold text-xl mb-2">
                                        Next
                                    </p>
                                    <PieceQueue />
                                </div>
                            </div>
                        </div>
                        {state === "PAUSED" && (
                            <div className="h-full w-full absolute bg-gray-800/90 text-white flex flex-col justify-center items-center  font-bold rounded-xl text-center">
                                <h2 className="text-5xl">Paused</h2>
                                <button
                                    onClick={controller.resume}
                                    className="bg-blue-600 p-2 rounded-xl hover:bg-blue-500 transition-all text-3xl mt-4"
                                >
                                    Resume
                                </button>
                                <div className="text-xl mt-4 text-left">
                                    <p className="text-3xl text-center">
                                        Controls:
                                    </p>
                                    <p>
                                        Hard Drop:{" "}
                                        <span className="text-blue-400">
                                            SPACE
                                        </span>
                                    </p>
                                    <p>
                                        Down:{" "}
                                        <span className="text-blue-400">
                                            DOWN_ARROW
                                        </span>
                                    </p>
                                    <p>
                                        Pause:{" "}
                                        <span className="text-blue-400">P</span>
                                    </p>
                                    <p>
                                        Hold:{" "}
                                        <span className="text-blue-400">
                                            C / SHIFT
                                        </span>
                                    </p>
                                    <p>
                                        Rotate Clockwise:{" "}
                                        <span className="text-blue-400">
                                            UP_ARROW / X
                                        </span>
                                    </p>
                                    <p>
                                        Rotate Anti-Clockwise:{" "}
                                        <span className="text-blue-400">Z</span>
                                    </p>
                                </div>
                            </div>
                        )}
                        {state === "LOST" && (
                            <div className="h-full w-full absolute bg-gray-800/90 text-center text-white flex flex-col justify-center items-center text-4xl font-bold rounded-xl">
                                <h2>
                                    Game{" "}
                                    <span className="text-red-500">Over</span>
                                </h2>
                                {highscore < points && (
                                    <div>
                                        <h1 className="text-blue-500">
                                            New Highscore!
                                        </h1>
                                        <h2 className="text-3xl">
                                            Highscore:{" "}
                                            <span className="text-blue-500">
                                                {points}
                                            </span>
                                        </h2>
                                    </div>
                                )}
                                {highscore > points && (
                                    <h2 className="text-3xl">
                                        Highscore:{" "}
                                        <span className="text-blue-500">
                                            {highscore}
                                        </span>
                                    </h2>
                                )}

                                <button
                                    onClick={() => restart(controller, points)}
                                    className="bg-red-600 p-2 rounded-xl hover:bg-red-500 transition-all text-2xl mt-4"
                                >
                                    New game
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </Tetris>
        </div>
    );
};

export default TetrisGame;
