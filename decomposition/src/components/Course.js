import React from 'react'
import CourseItem from './CourseItem'

/**
 * Компонент отвечает за отображение курсов валют
 * Перебирает массив с объектами валют и передает информацию в props компоненту CourseItem
 */
export default function Course() {

    const Prod = [{ text: "USD MOEX", cost: "63,52", dynamics: "+009" },
    { text: "EUR MOEX", cost: "70,86", dynamics: "+014" },
    { text: "НЕФТЬ", cost: "64,90", dynamics: "+1,63%" }]



    return (
        <div className='Course'>
            {Prod.map(p => (<CourseItem prod={p}></CourseItem>))}
        </div>
    )
}
