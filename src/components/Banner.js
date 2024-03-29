import '../Styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
    const title = "La Maison Jungle"
    return (
    <div className="lmj-banner">
        <img src={logo} alt='la maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'> {title}</h1>
    </div>
    );
}

export default Banner