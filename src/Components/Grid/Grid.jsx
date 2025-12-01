import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helper/checkWinner";
import './Grid.css';

function Grid({ numberOfCards }){
    const [ turn, setTurn ] = useState(false) // false -> X, true -> O
    const [ board, setBoard ] = useState(Array(numberOfCards).fill(""));
    const [ winner, setWinner ] = useState(null);

    

    function onPlay(index){
        console.log("move turn", index);
        if(turn == true){
            board[index] = "O";
        }
        else{
            board[index] = "X";
        }
        const win = isWinner(board, turn ? "O":"X");
        console.log("winner is", win);
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <>
            {winner && (
                <>
                    <h1 className="turn-highlighted">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            <h1 className="turn-highlighted">Current Turn : {(turn)?'O':'X'}</h1>
            <div className="grid">
                {board.map((value, idx)=>{
                    return <Card onPlay={onPlay} player={value} key={idx} index={idx}/>
            })}
            </div>
        </>
        
    );
}
export default Grid;