import React from "react";
import './kalkulator.css'


const Przyciski =({onButtonClick, onCalculate, onClear})=>{
    const guzikWartosc = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '='];
    return(
        <div className="guziki">
            {guzikWartosc.map((wartosc, index) =>(
                <button key={index} onClick={()=> onButtonClick(wartosc)}>
                    {wartosc}
                </button>
            ))}
            <button onClick={onClear} className="guzikCzyszczenia">
                C
            </button>
            <button onClick={onCalculate} className="guzikCalculate">
                =
            </button>
        </div>
    )
}

export default Przyciski;