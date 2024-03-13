import CareScale from "./CareScale";
import '../Styles/PlantItem.css'


function PlantItem({id,cover,nom,water,light,price}) {

    function handleClick(plantname) {
        alert(`Vous voulez acheter un 1 ${plantname} ? très bon choix !`)
    }

    return(
        
        <li className="lmj-plant-item" onClick={() => handleClick(nom)}>
            <span className="lmj-plant-item-price">{price} XAF</span>
            <img className="lmj-plant-item-cover" src={cover} alt={`${nom} cover`}/> 
            {nom}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}
export default PlantItem