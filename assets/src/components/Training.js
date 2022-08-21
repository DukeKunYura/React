import React, { useState } from 'react';

export default function Training() {

    //три состояния: для хранения формы,  списка тренировок и опции редактирования
    const [form, setForm] = useState({
        date: "",
        distance: 0

    });

    const [trainy, setTrainy] = useState([]);

    const [modify, setModify] = useState(false);

    //отправка данных в массив в стейте
    const handleSubmit = evt => {
        evt.preventDefault();

        //Проверка поля дистанция на релевантность

        if (Math.sign(form.distance) === 1) {

            //Проверка повтора даты и ее наличия в поле и отсутствие запроса на редактирование записи
            let repeatDate = trainy.find(item => item.date === form.date);

            if (!repeatDate && form.date && !modify) {
                setTrainy(prev =>
                    ([...prev, { date: form.date, distance: form.distance }].sort(function (a, b) { return new Date(b.date) - new Date(a.date) })));

                setForm(prev => ({ ...prev, distance: "" }))


            }
            //редактирование записи
            if (modify) {
                repeatDate.distance = Number(form.distance);
                let filterArr = trainy.filter(d => d.date !== form.date);
                filterArr.push(repeatDate);

                setTrainy(filterArr.sort(function (a, b) { return new Date(b.date) - new Date(a.date) }));
                setForm(prev => ({ ...prev, distance: "" }))
                setModify(false)
            }
            //добавление в существующую строку
            else {
                repeatDate.distance = Number(repeatDate.distance) + Number(form.distance);
                let filterArr = trainy.filter(d => d.date !== form.date);
                filterArr.push(repeatDate);

                setTrainy(filterArr.sort(function (a, b) { return new Date(b.date) - new Date(a.date) }));
                setForm(prev => ({ ...prev, distance: "" }))

            }

        }

    }



    //функция связи форм и состояния
    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm(prevForm => ({ ...prevForm, [name]: value }));

    }

    //удаление строки
    const handleDelete = (t) => {
        let newArr = trainy.filter(el => (el.date !== t));
        setTrainy(newArr)
    }

    //редактирование строки
    const handleModify = (date, distance) => {
        setModify(true)
        setForm({ date: date, distance: distance })
    }

    return (
        <div>
            <form className='Form'>
                <div className='TrainingDate'>
                    <label htmlFor='inputDate'>Дата (ДД.ММ.ГГ)</label>
                    <input className='InputDate' type='date' id='inputDate' name='date' value={form.date} onChange={handleChange}></input>
                </div>
                <div className='TrainingDistance'>
                    <label htmlFor='inputDistance'>Пройдено км</label>
                    <input className='InputDistance' id='inputDistance' name='distance' value={form.distance} onChange={handleChange}></input>
                </div>
                <button className='SubBut' onClick={handleSubmit}>OK</button>
            </form>
            <div className='Output'>
                <div className='Title'>
                    <p>Дата (ДД.ММ.ГГ)</p>
                    <p>Пройдено км</p>
                    <p>Действия</p>

                </div>
                <div className='Table'>
                    {
                        trainy.map(t =>
                            <div className='Record' key={t.date}>
                                <p className='DateRec'>{t.date}</p>
                                <p className='DistRec'>{t.distance}</p>
                                <div className='EditButtons'>
                                    <p className='RedButton' onClick={() => { handleModify(t.date, t.distance) }}>Edit</p>
                                    <p className='DelButton' onClick={() => { handleDelete(t.date) }}>Delete</p>
                                </div>


                            </div>)
                    }
                </div>


            </div>

        </div>
    )
}
