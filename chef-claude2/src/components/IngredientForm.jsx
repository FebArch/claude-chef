import React from 'react'

export default function IngredientForm() {

    let [ingdList, addIngd] = React.useState([])

    function addIngredient(e) {
        e.preventDefault()
        let ingredientName = document.querySelector("#ingredientName").value
        
        addIngd((prevVal)=>{
            return [...prevVal, ingredientName]
        })
    }

    let ingdListElements = ingdList.map((i)=>{
        return <li className='my-1 fs-5'>{i}</li>
    })

    return (
        <div className="container">

            <div className="input-group my-5 d-flex justify-content-center align-items-center">
                <form className='w-75' onSubmit={addIngredient}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="ingredientName" placeholder="eg. tomato" aria-label="Ingredient's name" aria-describedby="Ingredients-addon2" id='ingredientName' />
                        <button className="btn btn-dark" type="submit" id="button-addon2">+ Add Ingredient</button>
                    </div>
                </form>
            </div>

            <div className="container">
                <ul className="list-group w-50">
                    {ingdListElements}
                </ul>
            </div>
        </div>
    )
}