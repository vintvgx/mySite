import React from 'react';
import { useState } from 'react';
import reactPic from '../components/pics/React.png';
import HTML from '../components/pics/HTML5.png';
import JS from '../components/pics/JS.png';
import Strap from '../components/pics/Strap.png';
import CSS from '../components/pics/CSS.png';
import Node from '../components/pics/Node.png';
import Comptia from '../components/pics/comptia.png';
import Adobe from '../components/pics/Adobe.png';
import Git from '../components/pics/Github.png';




const Education = (props) => {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (

        <section id="work">

            <div className="workTitle">
                
                <hr />
            </div>

            <div  className="container">

            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    NECC
          </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    UML
          </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    UDEMY
          </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>Nortern Essex Community College</h2>
                    <h5>Associates in Computer Science</h5>
                    <hr />
                    <h6>Major Courses:</h6>
                    <p>
                    CIS 141/CIS 252 (Java)<br />CIS 205 (C)<br />CIS 240 (C++)<br />CTE 101 (Digital Circuit Design)<br />CIS 117 (Linux)
            </p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>University of Massachusetts Lowell</h2>
                    <h5>Bachelors in Computer Science</h5>
                    <hr />
                    <h6>Major Courses:</h6>
                    <p>
                    COMP 2040 (C++)<br />COMP 2030 Assembly
            </p>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2 className="centered">UDEMY</h2>
                    <hr />
                    <div className="container-fluid justify-content-center">
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6 " src={reactPic} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={HTML} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={JS} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={Strap} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={CSS} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={Node} alt="Logo"/>
                    </div>
                    <div className="selfTaught justify-content-center">
                      <h6>Self-Taught</h6>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={Comptia} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={Adobe} alt="Logo"/>
                      <img className="col-lg-3 col-md-4 col-sm-4 col-6" src={Git} alt="Logo"/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Education;