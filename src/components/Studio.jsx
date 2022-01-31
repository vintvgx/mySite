import React from 'react';
import Apple from './pics/Iphone13Launch.png';
import banditTech from './projects/banditTech.png';



function Studio () {
    return (
        <section className="projRevamp">
            <div className="container">
            <div className="row proj2">
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 projectCard">
                        <div className=" w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                            <a href="https://vintvgx.github.io/bandit-Tech/" target="_blank" className="link-block w-inline-block">
                                <div>
                                    <img className="image-2" loading="lazy" size="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 27vw, (max-width: 9238px) 31vw, 2864px" src={banditTech} alt="Bandit Tech"/>
                                    <p className="project-title">BANDIT TECH<br></br></p>
                                    <p className="projectDesc">An app that teaches programming using modern themes.</p>
                                    <p className="projectDep">> React<br/>> Bootsrap</p>
                                </div>
                            </a>
                        </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 projectCard">
                        <div className=" w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                            <a href="https://vintvgx.github.io/AppleIPhone13Launch/" target="_blank" className="link-block w-inline-block">
                                <div>
                                    <img className="image-2" loading="lazy" size="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 27vw, (max-width: 9238px) 31vw, 2864px" src={Apple} alt="IphoneLaunchPage"/>
                                    <p className="project-title">Iphone 13 Launch<br></br></p>
                                    <p className="projectDesc">I recreated the Apple homepage for the IPhone 13 Launch. One of my earliest projects further advancing my skills in CSS and using Bootstrap.</p>
                                    <p className="projectDep">> React<br/>> Bootsrap<br/>> CSS</p>
                                </div>
                            </a>
                        </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 projectCard">
                        <div className=" w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                            <a href="google.com" target="_blank" className="link-block w-inline-block">
                                <div>
                                    <img className="image-2" loading="lazy" size="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 27vw, (max-width: 9238px) 31vw, 2864px" src={Apple} alt="IphoneLaunchPage"/>
                                    <p className="project-title">Apple Iphone 13 Launch<br></br></p>
                                    <p className="paragraph">This is my rendition of the Apple website for the Iphone 13 Launch.</p>
                                </div>
                            </a>
                        </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-12 ">
                        <div className=" w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
                            <a href="google.com" target="_blank" className="link-block w-inline-block">
                                <div>
                                    <img className="image-2" loading="lazy" size="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 27vw, (max-width: 9238px) 31vw, 2864px" src={Apple} alt="IphoneLaunchPage"/>
                                    <p className="project-title">Apple Iphone 13 Launch<br></br></p>
                                    <p className="paragraph">This is my rendition of the Apple website for the Iphone 13 Launch.</p>
                                </div>
                            </a>
                        </div>
                </div>
            </div>
            </div>
        </section>
    );
 }

    export default Studio;