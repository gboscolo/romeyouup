import { motion } from "framer-motion"; import * as React from 'react';
import Curtain from "./Curtain";
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import "./tutcss.css";
import i18n from "../../i18n";
function Gallery() {
  const hover = {
    scaleX: 1.1,
    scaleY: 1.1,
    filter: "brightness(1)",
    transition: {
      duration: 0.3,
      ease: "linear",
    },
  };

  const zoom = {
    initial: { scale: 1, x: -80, filter: "brightness(0.78)" },
    animate: { x: 0, scale: 1.2, transition: { duration: 1.8 } },
  };

    const assets = [
        "https://romeyouup.it/images/5",
        "https://romeyouup.it/images/9",
        "https://romeyouup.it/images/25",
        "https://romeyouup.it/images/8"
    ];

  return (
    <>
    <div id="gallery">
      <div>
        <motion.img
                      variants={zoom}
                      initial="initial"
                      animate="animate"
                      whileHover={hover}
                      src={assets[0]}
                  ></motion.img>
                  <Detail title={i18next.t("HomeGalleryTitle1")} role={i18next.t("HomeGalleryText1")} link="/WhoWeAre" />
      </div>
      <div>
        <motion.img
                      variants={zoom}
                      initial="initial"
                      animate="animate"
                      whileHover={hover}
                      src={ assets[1]}
        ></motion.img>
                  <Detail title={i18next.t("HomeGalleryTitle2")} role={i18next.t("HomeGalleryText2")} link="/Contacts" />
      </div>
      <div>
        <motion.img
                      variants={zoom}
                      initial="initial"
                      animate="animate"
                      whileHover={hover}
                      src={assets[2]}
        ></motion.img>
                  <Detail title={i18next.t("HomeGalleryTitle3")} role={i18next.t("HomeGalleryText3")} link="ourproposals" />
      </div>
   
    </div>


   <Curtain number={4} />
   </>
  );
}

function Detail({ title, role, link }) {
    return (
        <Link to={ link }>
        <div className="details">
          <h3>{title}</h3>
          <p>{role}</p>   
        </div>
    </Link>
  );
}

export default Gallery;