import React from 'react'

/**
 * Компонент принимает и рендерит текст новости и ссылку на нее
 */
export default function News(props) {
    const { newsItem } = props

    return (
        <li>
            <a className='NewsItem' href={newsItem.href}>{newsItem.text}</a>

        </li>

    )
}
