import React from 'react'
import banner from "./banner.jpg"

/**
 * Компонент отвечает за отображение рекламного баннера
 */
export default function Banner() {
    return (
        <div className='Banner'>
            <img src={banner} alt='banner'></img>
        </div>
    )
}
