import React, { useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync1';

export default function Version1() {

    const [mount, setMount] = useState(false)

    const { execute, status, value, error } = useAsync(
        () => fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json()), false);


    useEffect(() => { if (!mount) { setMount(true); execute() } }, [execute, mount]);

    return (
        <div>
            "status: " {status}
            {status === "pending" && <progress />}
            <button onClick={execute}>execute</button>
            {error && error}
            {value ? value.map(v => <div key={v.id}>{v.title}</div>) : "loading"}


        </div>
    )
}
