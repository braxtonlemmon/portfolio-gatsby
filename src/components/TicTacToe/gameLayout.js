import React, { useEffect } from 'react';
import './ttt_style.css';

const TicTacToe = () => {
  useEffect(() => {
    require('./game.js');
    return () => {
      delete require.cache[require.resolve('./game.js')]
    }
  })

  return (
    <div className="container">
      <h1 className="main">Tic Tac Toe</h1>
      <div className="main gameboard">
        <div className="spot" data-key="0"></div>
        <div className="spot" data-key="1"></div>
        <div className="spot" data-key="2"></div>
        <div className="spot" data-key="3"></div>
        <div className="spot" data-key="4"></div>
        <div className="spot" data-key="5"></div>
        <div className="spot" data-key="6"></div>
        <div className="spot" data-key="7"></div>
        <div className="spot" data-key="8"></div>
      </div>
      <div className="main scoreboard">
        <div className="player player1">
          <h3 className="player1-name">Player A</h3>
          <p className="player1-score">--</p>
        </div>
        <div className="scoreboard-line"></div>
        <div className="player player2">
          <h3 className="player2-name">Player B</h3>
          <p className="player2-score">--</p>
        </div>
      </div>
      <div className="box"></div>
      <button className="main button reset-button">NEW GAME</button>
    </div> 
  )
}

export default TicTacToe;