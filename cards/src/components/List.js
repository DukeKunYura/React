import React from 'react'
import Card from './Card'

export default function List() {

    //массив объектов с данными для карточек
    const someArray = [
        {
            pic: "https://s1.1zoom.ru/big7/570/Raccoons_514257_2560x1708.jpg",
            alt: "raccoon",
            title: "Card title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            href: "https://yandex.ru/search/?text=%D0%B5%D0%BD%D0%BE%D1%82&lr=967&clid=2411726"
        },


        {
            title: "Special title treatment",
            text: "With supporting text below as a natural lead-in to additional content."
        }
    ]

    //тиражируем карточки, передавая компоненту card изображение в props и разметку в props.children
    return (
        <div>
            {someArray.map(s =>
                <Card someObject={s} >
                    <div className="card-body">
                        <h5 className="card-title">{s.title}</h5>
                        <p className="card-text">{s.text}</p>
                        <a href={s.href} className="btn btn-primary">Go somewhere</a>
                    </div>
                </Card>
            )}


        </div>
    )
}
