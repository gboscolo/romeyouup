import React, { useState, Fragment } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import './css/Language.css';

const Language = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
    }

    return (
        <Fragment>
            
        </Fragment>
    );
}

export default withTranslation()(Language);