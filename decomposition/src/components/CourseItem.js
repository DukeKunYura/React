import React from 'react'

/**
 * Компонент рендерит название, курс и динамику, переданной ему валюты
 * @param {} props Принимает информацию о валютах
 * @returns 
 */
export default function CourseItem(props) {
    const { prod } = props
    return (
        <>
            <p>{prod.text + " " + prod.cost + " " + prod.dynamics}</p>

        </>
    )
}
