import React from 'react'
import News from './News'

/**
 * Компонент отвечает за обработку массивов newsMenu для рендера меню новостей
 * и обработку массива newsList для рендера компонентов News
 */
export default function NewsList() {

    const newsMenu = ["Сейчас в СМИ", "в Германии", "Рекомендуем"]
    const newsList = [{ text: "Путин упростил получение...", href: " " },
    { text: "В команде Зеленского...", href: " " },
    { text: "Турпомощь прокомментировала...", href: " " },
    { text: "Суд закрыл дело Демпартии...", href: " " },
    { text: "На Украине призвали...", href: " " }]


    return (
        <div className='NewsList'>
            <div className='NewsMenu'>
                {newsMenu.map(m => (<p className='newsMenuItem'>{m}</p>))}
            </div>
            <ul>
                {newsList.map(l => (<News newsItem={l}></News>))}
            </ul>

        </div>
    )
}
