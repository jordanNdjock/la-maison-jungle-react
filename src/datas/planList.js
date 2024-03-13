import monstera from '../assets/monstera.jpg'
import basil from '../assets/basil.jpg'
import succulent from '../assets/succulent.jpg'
import lyrata from '../assets/lyrata.jpg'
import calathea from '../assets/calathea.jpg'
import pothos from '../assets/pothos.jpg'
import cactus from '../assets/cactus.jpg'
import olivier from '../assets/olivier.jpg'
import mint from '../assets/mint.jpg'

export const planList = [
    {
        nom : 'Monstera',
        catégorie : 'classique',
        identifiant : '1ed',
        water : 2,
        light : 3,
        cover: monstera,
        price : 1500
    },
    {
        nom : 'ficus lyrata',
        catégorie : 'classique', 
        identifiant : '2ab',
        water : 3,
        light : 1,
        cover: lyrata,
        price : 2500
    },
    {
        nom : 'pothos argenté',
        catégorie : 'classique',
        identifiant : '3sd',
        isSpecialOffer : true,
        water : 2,
        light : 3,
        cover: pothos,
        price : 1000
    },
    {
        nom : 'calathea',
        catégorie : 'interieur',
        identifiant : '4kk',
        water : 1,
        light : 2,
        cover: calathea,
        price : 700
    },
    {
        nom : 'olivier',
        catégorie : 'extérieur',
        identifiant : '5pl',
        isAvailable: false,
        water : 1,
        light : 1,
        cover: olivier,
        price : 1800
    },
    {
        nom : 'cactus',
        catégorie : 'plante grasse',
        identifiant : '8fd',
        isSpecialOffer: true,
        water : 2,
        light : 2,
        cover: cactus,
        price : 1400
    },
    {
        nom : 'basilique',
        catégorie : 'extérieur',
        identifiant : '7ie',
        isSpecialOffer: true,
        water : 1,
        light : 3,
        cover: basil,
        price : 1050
    },
    {
        nom : 'succulente',
        catégorie : 'plante grasse',
        identifiant : '9vn',
        water : 2,
        light : 1,
        cover: succulent,
        price : 800
    },
    {
        nom : 'menthe',
        catégorie : 'extérieur',
        identifiant : '8un',
        water : 2,
        light : 2,
        cover: mint,
        price : 400
    }
]