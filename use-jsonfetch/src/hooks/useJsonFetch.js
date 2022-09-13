import { useEffect, useState } from 'react';

/**
 * Хук принимает аргументами url и options, отправляет fetch запросы 
 * возвращает данные по результатам запроса, boolean флаг загрузки и объект ошибки
 */
export default function useJsonFetch(url, opts) {
    const [state, setState] = useState({ loading: true, data: [], error: "" });

    useEffect(() => {
        setState(prevState => ({ ...prevState, loading: true }));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error occurred!')
                }

                return response.json()
            })
            .then(data => setState(prevState => ({ ...prevState, data, loading: false })))
            .catch(error => setState(prevState => ({ ...prevState, error, loading: false })))

    }, [url]);

    return [state.data, state.loading, state.error];
}