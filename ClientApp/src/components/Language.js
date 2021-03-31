import React, { useState, Fragment } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

const Language = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
    }

    return (
        <Fragment>
            <Button id="languagePopover" type="button" className="link">
                {i18next.language}
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="languagePopover" toggle={toggle} trigger={"click"}>
                <PopoverHeader>{i18next.t("SelectLinguage")}</PopoverHeader>
                <PopoverBody>
                    <div className="" onClick={(e) => { changeLanguage("en") }}>{i18next.t("English")}</div>
                    <div className="" onClick={(e) => { changeLanguage("it") }}>{i18next.t("Italian")}</div>
                    <div className="" onClick={(e) => { changeLanguage("es") }}>{i18next.t("Spanish")}</div>
                </PopoverBody>
            </Popover>
        </Fragment>
    );
}

export default withTranslation()(Language);