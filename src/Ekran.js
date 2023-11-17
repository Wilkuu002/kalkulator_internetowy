import React from "react";
import './kalkulator.css'
const Ekran = ({wyrazenie, rezultat})=>{
    return(
        <div className="ekran">
            <div className="wyrazenie">{wyrazenie}</div>
            <div className="rezultat">{rezultat}</div>
        </div>
    )
}
export default Ekran