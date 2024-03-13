import '../Styles/Categorie.css'

function Categories({setActiveCategory, categories, activeCategorie}) {
    return(
        <div className='lmj-categories'>
            Trié par catégorie : &nbsp;
            <select
            value={activeCategorie}
            onChange={(e) => setActiveCategory(e.target.value)}
            className='lmj-categories-select'>
                <option value=''>-----</option>
                {categories.map((cat) =>
                <option key={cat} value={cat}>{cat}</option>
                )}
                {/* <option onClick={() => setActiveCategory('')}>Réinitialiser</option> */}
            </select>
        </div>
    )
}
export default Categories