import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <td>
            <Sparklines width={180} height={120} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </td>
    );
}
