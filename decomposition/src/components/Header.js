import React from 'react'
import NewsList from './NewsList'
import Course from './Course'
import Widget from './Widget'
import sha from "./sha.jpg"

/**
 * Компонент отвечает за отображение контента в верхней части страницы
 * Его задача - рендер трех компонентов: 
 * - NewsList (списка новостей)
 * - Course (курсов валют)
 * - Widget "Работа над ошибками" (+ передает изображение в пропс)
 */
export default function Header() {


    return (
        <div className='Header'>
            <div className='HeaderColumn'>
                <NewsList></NewsList>
                <Course></Course>
            </div>

            <Widget pic={sha} title={"Работа над ошибками"}></Widget>

        </div>
    )
}
