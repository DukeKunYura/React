import React from 'react'
import Menu from './Menu'

/**
 * Компонент отвечает за отображение и работу поиска,
 * и рендер компонента Menu 
 */
export default function Search() {

    const hint = "фаза луны сегодня"



    return (
        <div className='MainSearch'>
            <div className='Yandex'>Яндекс</div>
            <div className='MenuSearch'>
                <Menu></Menu>
                <div className='InputBar'>
                    <input className='Input'></input>
                    <div className='SearchButton'>Найти</div>
                </div>
                <p className='Hint'>Найдется все. Например, {hint}</p>
            </div>

        </div>
    )
}
