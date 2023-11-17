import React, {useState} from 'react';
import Ekran from "./Ekran";
import Przyciski from "./Przyciski";
import './kalkulator.css'

const Kalkulator = () =>{

    const [wyrazenie, setWyrazenie] = useState('');
    const [rezultat, setRezultat] = useState('');

    const gdyGuzikKlikniety = (wartosc) =>{
        setWyrazenie((poprzednieWyrazenie) => poprzednieWyrazenie+wartosc);
    };

    const Obliczanie = () =>{
        try{
            setRezultat(eval(wyrazenie).toString());
        }catch(error){setRezultat("Błąd");}
    };
    const Wyczysc = () =>{
        setRezultat('')
        setWyrazenie('')
    }
    return (
        <div className='kalkulator'>
        <Ekran wyrazenie={wyrazenie} rezultat = {rezultat}></Ekran>
            <Przyciski onButtonClick={gdyGuzikKlikniety} onCalculate={Obliczanie} onClear={Wyczysc}/>
        </div>
    )

}
export default Kalkulator;