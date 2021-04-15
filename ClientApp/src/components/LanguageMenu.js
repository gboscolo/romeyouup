import React, { useState, Fragment } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import './css/Language.css';

const LanguageMenu = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
    }

    const popoverId = "languagePopover";

    return (
        <Fragment>
            <Button id={popoverId} type="button" className="link languagePopover">
                <span className="globe"></span>
                <span className="language-label">{i18next.language}</span>
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} container={".bm-menu-wrap"} target={popoverId} toggle={toggle} trigger={"click"} innerClassName="language-popover-item">
                <PopoverBody>
                    <div className="language-popover-row" onClick={(e) => { changeLanguage("en") }}>{i18next.t("English")}</div>
                    <div className="language-popover-row" onClick={(e) => { changeLanguage("it") }}>{i18next.t("Italian")}</div>
                    <div className="language-popover-row" onClick={(e) => { changeLanguage("es") }}>{i18next.t("Spanish")}</div>
                </PopoverBody>
            </Popover>
        </Fragment>
    );
}

export default withTranslation()(LanguageMenu);