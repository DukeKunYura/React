import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
    const [state, setState] = useState({ loading: true, data: [], error: null });

    useEffect(() => {
        setState(prevState => ({ ...prevState, loading: true }));
        fetch(url)
            .then(response => response.json())
            .then(data => setState(prevState => ({ ...prevState, data: (data), loading: false })))
            .catch(err => console.log(err))
        // .catch(error => setState(prevState => ({ ...prevState, error: error })))

    }, []);

    return [state.data, state.loading, state.error];
}