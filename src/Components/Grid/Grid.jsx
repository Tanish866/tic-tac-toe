import { useState } from "react";
import Card from "../Card/Card";

import './Grid.css';

function Grid({ numberOfCards }){
    const [ turn, setTurn ] = useState(false) // false -> X, true -> O
    const [ board, setBoard ] = useState(Array(numberOfCards).fill(""));
    function onPlay(index){
        console.log("move turn", index);
        if(turn == true){
            board[index] = "O";
        }
        else{
            board[index] = "X";
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    return (
        <>
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