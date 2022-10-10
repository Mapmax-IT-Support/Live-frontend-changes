import React from "react";
import StickyFooter from 'react-sticky-footer';
import FooterNew from "./Footer/FooterNew";
const darkBg = 'rgb(16,38,51)'
const lightBg = 'rgb(31,33,48)'
const textPrimary = 'black'
const navBg = 'linear-gradient(45deg, #6D929B 100%,  transparent)'
// const navBg = 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(6,6,73,1) 63%, rgba(0,212,255,1) 100%)'

const Footer = () => {
  return (

<FooterNew/>
//     <StickyFooter
//     stickAtThreshold={0.01}
//     bottomThreshold={50}
//     normalStyles={{
//     background:  navBg,
//     padding: '0.5rem',
//     color: 'black',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     }}
//     stickyStyles={{
//     backgroundColor: '#021d6e', //"rgba(53,58,54,.8)",
//     padding: '2rem',
//     visibility: 'hidden',
//     }}
// >
//     © Mapmax 2022
// </StickyFooter>
  );
}

export default Footer;