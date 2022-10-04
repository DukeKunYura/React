import React from 'react';
import useAsync from '../../hooks/useAsync'
import sendRequest from '../../functions/sendRequest';
import { useState } from 'react';

export default function TopSales() {
    const [state, setState] = useState()

    const { execute, status, value, error } = useAsync(
        sendRequest('GET', 'http://localhost:7070/api/top-sales'), false);


    return (
        <div>TopSales
            {/* {status === "idle" && <div>Start your journey by clicking a button</div>}
            {status === "success" && <div>{value.map(m => m.title)}</div>}
            {status === "error" && <div>{error}</div>} */}
            <button onClick={execute} disabled={status === "pending"}>
                {status !== "pending" ? "Click me" : "Loading..."}
            </button>
            {status}

        </div>
    )
}
