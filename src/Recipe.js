import React from 'react'
import style from './recipe.module.css'

function Recipe({ title, calories, image, ingredients, totalTime }) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <ol>
                {ingredients.map(ingridient => (
                    <li className={style.description}>{ingridient.text}</li>
                ))}
            </ol>
            <p>{calories.toFixed(2)} cal</p>
            <p>Total time: {totalTime === 0 ? '/' : totalTime} min</p>
        </div>
    )
}

export default Recipe