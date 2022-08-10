import React, { Component } from 'react'

export default class Toolbar extends Component {
    render() {
        const { filters } = this.props
        return (
            <div>
                {filters.map(f => <button onClick={() => { this.props.onSelectFilter(f) }}>{f}</button>)}
            </div>
        )
    }
}


// import React from 'react'

// export default function Toolbar(props) {

//     const { filters, selected, onSelectFilter } = props





//     return (
//         <div>
//             {filters.map(f => <button onClick={() => }>{f}</button>)}
//         </div>
//     )
// }
