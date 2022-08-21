import React, { useState } from 'react';

export default function Converter() {

    //состояния для  цвета фона и результата работы конвертера
    const [colorInput, setColor] = useState('');
    const [result, setResult] = useState('')

    //функция обработки ввода и конвертация в RGB
    const colorApply = ({ target }) => {
        const color = target.value

        setColor(color)

        function hex2rgb(c) {
            let bigint = parseInt(c.split('#')[1], 16);
            let r = (bigint >> 16) & 255;
            let g = (bigint >> 8) & 255;
            let b = bigint & 255;

            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }

        const res = hex2rgb(colorInput)
        setResult(res)

    }

    //стартовые значения
    let styleBack = { backgroundColor: "white" }
    let textResult = "input HEX"



    //проверка введенного значения
    if (colorInput.length === 7) {
        styleBack = { backgroundColor: colorInput }
        textResult = result
    }
    if (colorInput.length >= 7 && !/^#([0-9A-F]{3}){1,2}$/i.test(colorInput)) {
        styleBack = { backgroundColor: "red" };
        textResult = "ERROR"

    }


    return (
        <div className='Background' style={styleBack}>
            <input className='InputColor' id='inputColor' name='color' value={colorInput} onChange={colorApply}></input>
            <p className='Result'>{textResult}</p>

        </div>
    )
}
