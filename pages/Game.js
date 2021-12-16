import React, { useState } from "react";
import { calculateWinner } from "../components/ticTacToe/helper";
import Board from "../components/ticTacToe/Board";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (

        <li className=" list-none" key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>

      );
    });

  return (
    <>
      <Header />
      <div className="body">
        <div className=" content-center items-center flex flex-col grid-cols-2">
          <h2 className=" text-center text-7xl italic mb-20 font-serif antialiased md:subpixel-antialiased mt-5 m-auto text-teal-600">
            Tic tac toe
          </h2>
          <h3 className="text-3xl text-gray-600" id="winner">{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>

          <div className=" flex flex-cols-1 ">
            <Board squares={history[stepNumber]} onClick={handleClick} />

            <div className="flex flex-cols-2 text-justify text-lg ml-8">
              <h3 className="info-wrapper text-xl text-teal-600">History:</h3>
              <h3 className="pl-6 text-lg">{renderMoves()}</h3>

            </div>
          </div>
        </div>
        <Footer />

      </div>

    </>
  );
};

export default Game;