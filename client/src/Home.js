import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb,faMoon} from '@fortawesome/free-regular-svg-icons';
function Home() {

  const [bgclr,setbgclr]=React.useState('white');
  return (
    <div style={{backgroundColor:bgclr}}>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#"><h1>Codeconvertor</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutcontainer">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#inputbox">Use</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feedback">Feedback</a>
        </li>
      </ul>
    </div>
    <div onClick={()=>{setbgclr('#3F3351')}}><FontAwesomeIcon icon={faMoon}/></div>
    <div onClick={()=>{setbgclr('white')}}><FontAwesomeIcon icon={faLightbulb}/></div>
  </div>
  
</nav>
<section className="home" id="home">

   <div className="content">
       <h3>About code convertor</h3>
       <p>Codeconvertor is a website which helps programers and beginner coder to learn and convert program from one language to another </p>
       <a href="#inputbox" class="btn">Try it!</a>
   </div>
</section>
<div className="aboutcontainer" id="aboutcontainer">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/img1.png" class="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">

          <h5>Any programmer or developer is in need of converting a certain lines of code from one programming language into another programming language</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src="images/img3.png" class="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">

          <h5>Reduction of work and time increase in efficiency</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="images/img2.png" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">

          <h5>Can be used for learning purposes</h5>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" ></span>

    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" ></span>
    </button>
  </div>
</div>
<section className="inputbox" id="inputbox">
<h4 className="heading"> <span>THE CONVERTOR</span></h4>
 <form action="/" method="post">
  <div className="ipbox">
 <textarea style={{backgroundColor:bgclr}} name="prginp" placeholder="your message" id="" cols="50" rows="10" >
    </textarea>
    </div>
   <div className="outbox">
 <textarea style={{backgroundColor:bgclr}} name="" placeholder="your message" id="" cols="50" rows="10">
   </textarea>
  </div>
<input type="submit" value="Process" class="btn-lg btn-outline-dark"/>
    </form>
  </section>
<div className="feedbackbtn">
  <Link className='link' to="/feedback"><h1>Feedback</h1></Link>
</div>

 </div>
  );




}

export default Home;
