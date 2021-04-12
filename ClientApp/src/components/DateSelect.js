import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

// https://www.npmjs.com/package/react-date-picker

function DateSelect() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <DatePicker
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default DateSelect