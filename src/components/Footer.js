import {useState} from 'react'
import '../Styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('');
    function HandleInput(e) {
        setInputValue(e.target.value)
    }

    function HandleBlur() {
        if(!inputValue.includes('@')){
            alert("Attention, il n'a pas d'@, ceci n'est pas une adresse valide")
        }
    }

    return(
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné.e.s de plantes
            </div>
            <div className='lmj-footer-elem'>Laissez nous votre email :</div>
            <input
                placeholder='Entrez votre mail'
                onChange={HandleInput}
                value={inputValue}
                onBlur={HandleBlur}
            />
            
        </footer>
    )
}
export default Footer