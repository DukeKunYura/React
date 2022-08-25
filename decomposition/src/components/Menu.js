import React from 'react'

/**
 * Компонент рендерит меню поиска из элементов массива
 */
export default function Menu() {

    const menuArr = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "Еще"]


    return (
        <div className='Menu'>
            {menuArr.map(m => (<p className='MenuButton'>{m}</p>))}
        </div>
    )
}
