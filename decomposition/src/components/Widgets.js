import React from 'react'
import Widget from './Widget'

/**
 *Компонент отвечает за работу и рендер виджетов.
 Передает им заголовки в props и разметку в props.children
 */
export default function Widgets() {
    return (
        <div className='Widgets'>
            <Widget title={"Погода"}>
                <p className='Weather'>+17</p>

            </Widget>
            <Widget title={"Посещаемое"}>
                <p>Недвижимость - о сталинках</p>
                <p>Маркет - люстры</p>
                <p>Автоюру - привод 4х4</p>
            </Widget>
            <Widget title={"Карта Германии"}>
                <p>Расписания</p>
            </Widget>
            <Widget title={"Телепрограмма"}>
                <p>00:00 ТНТ BEST</p>
                <p>00:12 Джинглики</p>
            </Widget>
            <Widget title={"Эфир"}>
                <p>Управление как искусство</p>
                <p>Ночью Мир в это время</p>
                <p>Андрей Возн...</p>
            </Widget>

        </div>
    )
}
