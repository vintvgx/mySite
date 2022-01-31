import React from 'react';


function Home () {

    function alertMessage() {
        alert("STILL WORKING ON THE BACKEND\n Please refer to my resume to get in contact with me, thank you for baring with me 😊");
    }

    return (
        <div className="container homePage" id="Home">
            <h4 class="fadeup-enter-done">Hi, my name is</h4>
            <h1 class="bigHeading" >Kareem Saygbe.</h1>
            <h2>Web Developer. Creator. Programmer.</h2>
             {/* <p>I free lance in wed development and web design, I story tell <br /> with my camera through photography and video-making and <br /> I program applications in various languages. </p>  */}
            <button className="btn  btn-outline-primary" onClick={alertMessage}>GET IN TOUCH</button>
        </div>
    )
}

export default Home;