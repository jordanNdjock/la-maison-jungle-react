import { planList } from "../datas/planList";
import "../Styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState } from 'react';

function ShoppingList({cart,updateCart}){
    const [activeCategorie,setActiveCategory] = useState('')
     const categories = planList.reduce(
        (acc, plant) => acc.includes(plant.catégorie) ? acc : acc.concat(plant.catégorie),
        []
     )
    // comportement  
    function addToCart(nom,price) {
        const currentPlanSaved = cart.find((plant) => plant.nom === nom)
        if(currentPlanSaved){
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.nom !== nom
            )
            updateCart([
                ...cartFilteredCurrentPlant,{nom,price,amount : currentPlanSaved.amount + 1}
            ])
        }else{
            updateCart([...cart,{nom,price,amount:1}])
        }
        
    }
    // Affichage
    return(
        <div className="lmj-shopping-list">
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategorie={activeCategorie}
            />
            <ul className="lmj-plan-list">
                {planList.map(({identifiant,cover,nom,water,light,price,catégorie}) => 
                !activeCategorie || activeCategorie === catégorie ? (
                    <div key={identifiant} className="lmj-plant">
                    <PlantItem
                    cover={cover}
                    nom={nom}
                    water={water}
                    light={light}
                    price={price}
                    />
                    <button onClick={() => addToCart(nom,price)} className='lmj-plant-add'>Ajouter <span style={{fontSize:'15px'}}>+</span></button>
                    </div>
                ) : null
                )}
            </ul>
        </div>
        
    )     
}
export default ShoppingList