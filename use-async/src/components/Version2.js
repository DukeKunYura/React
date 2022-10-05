import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync2';

export default function Version2() {

    const [mount, setMount] = useState(false);

    const { data, loading, error, run } = useAsync([]);

    useEffect(() => {
        if (!mount) {
            setMount(true);
            run(() => fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json()));
        }


    }, [run, mount]);

    return (
        <div>
            {loading && <progress />}
            {error && error}
            {data && data.map(d => <div key={d.id}>{d.title}</div>)}
        </div>
    )
}
