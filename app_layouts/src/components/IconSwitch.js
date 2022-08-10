import React from 'react';
import MaterialIcons from '@material-ui/icons';

export default function IconSwitch() {
    return (
        <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")} />
    )
}
