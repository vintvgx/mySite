
import React, {useState} from "react";
import Myself from './pics/profile.jpg';

function About() {

  const [iamgePad, setImagePad] = useState()
  
  return (
    <div className="container ">
    <div className="row align-items-center my-5 About" id="About">
        <div className="col-lg-5">
            <img className="circle-img img-fluid mb-4 mb-lg-0" src={Myself} alt="DeskArea"/>
        </div>
        <div className="col-lg-7 aboutText ">
            <h6>01.</h6>
            <h4>About</h4>
            <p><br />Hello! I am Kareem, a programmer based in Lawrence, MA.<br /><br />I simply enjoy CREATING. In such a tech savvy world we live in now, I create anything from websites to applications to editing the content from my camera with Adobe Suite. My goal is to provide products with transformative interfaces that are easy-to-use and are seamless to the eye.<br /><br />I am a student of the arts and all things tech, simply yearning to collaborate with a team and create.</p>
        </div>
    </div>
</div>
  );
}

export default About;

