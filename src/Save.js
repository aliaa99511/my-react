/*import React, { Component } from 'react'
import '../Styles/NavbarStyle.css'
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return(

            <div className="navbar">
                
                <div className="container">
                    
                    <div className="logo">
                        <h2 className="logo-text">Notary</h2>
                    </div>
               
               
                    <ul className="ul-list">
                        <li className="list-item"><Link to='/'>Home</Link></li>
                        <li className="list-item"><Link to='/About'>About</Link></li>
                        <li className="list-item"><Link to='/Blog'>Blog</Link></li>
                        <li className="list-item"><Link to='/Testimonials'>Testimonials</Link></li>
                        <li className="list-item"><Link to='/Contact'>Contact</Link></li>

                    </ul>
                    
                </div>
                
            </div>
        
        )
    }
}

export default Navbar;
.navbar {
    overflow: hidden;
    background: #fff;
    position: relative;
}

.navbar .logo {
    width: 50%;
    float: left;
}

.navbar .logo .logo-text{
    font-size: 30px;
    font-weight: bold;
    margin-left: 107px;

}

.navbar .ul-list {
    width: 50%;
    float: right;
    list-style: none;
    padding: 0;
}

.navbar .ul-list .list-item {
    display: inline-block;
}

.navbar .ul-list .list-item a {
    padding: 10px 15px;
    display: block;
    color: #222;
    text-decoration: none;
    font-weight: bold;
}

.navbar .ul-list .list-item a:hover {
    color: #6c757d
}*/













/*

import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../Styles/Footer.css'


export class Footer extends Component {
    render() {
        return (

    <div className="footer">
        <div className="opac">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2 onne">
                    <h5>Links</h5>
                    <ul className="list-unstyled ul-list">
                        <li className="list-item"><Link to='/'>Home</Link></li>
                        <li className="list-item"><Link to='/About'>About</Link></li>
                        <li className="list-item"><Link to='/Blog'>Blog</Link></li>
                        <li className="list-item"><Link to='/Testimonials'>Testimonials</Link></li>
                        <li className="list-item"><Link to='/Contact'>Contact</Link></li>

                    </ul>
                </div>
                <div className="col-7 col-sm-5 twwo">
                    <h5>Our Address</h5>
                    <address>
		              <p>121, Clear Water Bay Road</p>
		              <p>Clear Water Bay, Kowloon </p>
		              <p>HONG KONG</p><br />

		              <p><i className="fa fa-phone fa-lg"></i>: +852 1234 5678</p>
		              <p><i className="fa fa-fax fa-lg"></i>: +852 8765 4321</p>
		             
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center thhree">

                    <h5>About Us</h5>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>


                    <div className="llinks">
                    <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                        <i className="fa fa-google-plus"></i>
                    </a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <i className="fa fa-youtube"></i>
                        </a>
                        <a className="btn btn-social-icon" href="mailto:">
                            <i className="fa fa-envelope-o"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p className="copy">Copyright ©2020 All rights reserved</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

}
export default Footer
.footer{
    background-image: url("/images/write.jpg");
    background-size: 100% 772px;
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    color: white;
}
.footer .opac{
    width: 100%;
    height: 600px;
    background-color: rgba(0,0,0,0.6);
}

.footer .onne h5{
    margin-bottom: 18px;
    margin-left: 10px;
    font-size: 29px;
}
.footer h5{
    margin-top: 51px;

}
.footer .twwo h5{
    margin-bottom: 18px;
    font-size: 29px;
}

.footer .thhree .llinks{
    margin-top: 38px;

}

.footer .thhree .llinks i:hover{
color: #adb5bd;
}

.footer .thhree h5{
    margin-bottom: 18px;
    font-size: 29px;
    margin-top: -20px;
}
.footer .twwo address,.footer .thhree p{
    color: #adb5bd;


}
.footer .ul-list .list-item a {
    padding: 10px 15px;
    display: block;
    color: #adb5bd;
    text-decoration: none;
}

.footer .ul-list .list-item a:hover{
    color: white;
}

.footer .thhree .btn {
    color: white!important;
}

.footer .copy{
    color: #adb5bd;
}
/*
.footer .ul-list{
    margin-left: -12px;

}

.twwo address{
    color: #adb5bd;
}

.thhree h5{

}*/











/*import React, { Component } from 'react'
import Forms from '../Contactfiles/Forms'
import Maps from '../Contactfiles/Maps'


class Contact extends Component {
render() {
    return (
    <div>
        <Forms />
        
    </div>
    )
 }
}

export default Contact
/* <Maps />*/


/*


.mycontact{
    background-color: #8080801f;
    padding-bottom: 126px;
    margin-bottom: -50px;

}

.mycontact h1{
    text-align: center;
    margin-bottom: -110px;
    padding-top: 61px;
}

.mycontact .adres{
    display: flex;
    padding-top: 68px;
    margin-top: 113px;

}
.mycontact .adres .alii{
    margin-right: 63px;

}
.mycontact .adres i{
    margin-left: 52px;
    background-color: gray;
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;

}
.mycontact .adres .alii .fa-map-marker:before {
    position: absolute!important;
    left: 289px!important;
    top: 280px!important;
    font-size: 25px!important;
    color: beige;
}
.mycontact .adres .alii .fa-home:before {
    position: absolute!important;
    left: 557px!important;
    top: 280px!important;
    font-size: 25px!important;
    color: beige;
}

.mycontact .adres .alii .fa-plane:before {
    position: absolute!important;
    left: 830px!important;
    top: 280px!important;
    font-size: 25px!important;
    color: beige;
}

.mycontact .adres .alii .fa-rocket:before {
    position: absolute!important;
    left: 1098px!important;
    top: 280px!important;
    font-size: 25px!important;
    color: beige;
}
.mycontact .adres p:first-child{
    
}

.mycontact .adres .alii .osa {
    font-weight: 700;
    margin-right: 3px;
}

.myform{
    margin-top: 110px;

}
.myform textarea.form-control {
    height: 162px!important;
}



*/
/*

#map {
    height: 100vh;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }*/















  /*import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Blog from './Component/Blog'
import Testimonials from './Component/Testimonials'
import Contact from './Component/Contact'
import Footer from './Component/Footer'


import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/About"> <About/></Route>
            <Route path="/Blog"> <Blog/></Route>
            <Route path="/Testimonials"> <Testimonials/></Route>
            <Route path="/Contact"> <Contact/></Route>

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
*/




/*

import React, { Component } from 'react'
import FullScreen2 from '../Aboutfiles/FullScreen2'
import Hoverlay from '../Aboutfiles/Hoverlay'
import Shapes from '../Aboutfiles/Shapes'
import Works from '../Aboutfiles/Works'
import Price from '../Aboutfiles/Price'
import Food from '../Aboutfiles/Food'


export class About extends Component {
    render() {
        return (
            <div>
                <FullScreen2/>
                <Hoverlay />
                <Shapes />
                <Works />
                <Price />
                <Food />
                
            </div>
        )
    }
}

export default About*/










/*.full{
    background-image: url("/images/ttttt.jpg");
    background-size: 100% 772px;
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
}*/



/*.creative {
    height: 500px;
    background: url('../images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed
}*/


/*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */

















/*        return (
            <div className="full">
                <div className="pare">
                <div className="one">
                    <h3>Notary Public & Legal Solutions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
                </div>
                <div className="two">
                    <h5>Book an Appointment</h5>
                  <Form>
                  <FormGroup>
                        <Input type="text" name="Name" placeholder="Name" />
                    </FormGroup>

                    <FormGroup>
                        <Input type="email" name="email"  placeholder="Email" />
                    </FormGroup>
                    
                    <FormGroup>
                        <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="select Date"
                        />
                    </FormGroup>
                
                    <Button color="secondary" size="lg" block>Book Appointment</Button>
                    </Form>
                </div>
            </div>
            </div>

        )*/













/*.full{
    background-image: url("/images/ttttt.jpg");
    background-size: 100% 772px;
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
}*/






/*import React, { Component } from 'react'
import '../Styles/Contact.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Forms extends Component {
render() {
    return (
        <div className="mycontact">
            <h1>Contact us</h1>
            <div className="container">
    
                <div className="adres">
                    <div className="alii">
                        <i class="fa fa-map-marker"></i>
                        <p>
                            <span className="osa">Address:</span>
                            <span>198 west 21th street</span>
                        </p>
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                    <div className="alii">
                        <i class="fa fa-home"></i>
                        <p>
                        <span className="osa">Address:</span>
                        <span>198 west 21th street</span>
                        </p>
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                    <div className="alii">
                        <i class="fa fa-plane"></i>
                        <p>
                        <span className="osa">Address:</span>
                        <span>198 west 21th street</span>
                        </p>                   
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                    <div className="alii">
                        <i class="fa fa-rocket"></i>
                        <p>
                        <span className="osa">Address:</span>
                        <span>198 west 21th street</span>
                        </p>                   
                        <p className="text-muted">suit 721 new york ny 10016</p>
                    </div>
                </div>
    
    
    
                <div className="myform">
                <Form>
                    
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text"  id="examplePassword" placeholder="your name" />
                        </Col>
                    </FormGroup>
    
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder=" your Email " />
                        </Col>
                    </FormGroup>
    
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Subject</Label>
                        <Col sm={10}>
                            <Input type="text"  id="examplePassword" placeholder="Subject" />
                        </Col>
                    </FormGroup>
    
    
                    <FormGroup row>
                    <Label for="exampleText" sm={2}>Message</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Message"  />
                    </Col>
                    </FormGroup>
    
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button size="lg">Send Message</Button>
                    </Col>
                    </FormGroup>
    
                </Form>
    
                </div>
    
            </div>
        </div>
        )
    }
}

export default Forms
*/


/*import React, { Component } from 'react'
import '../Styles/Contact.css'

export class Maps extends Component {

    componentDidMount(){
        this.renderMap()
   }

   renderMap=()=>{
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIZaSyDIDrDBUd6GNL2EIBCxK-K00jKTny8KbuA&callback=initMap")
    window.initMap=this.initMap
   }

     initMap =() =>{
        var Map = new window.google.maps.Map(document.getElementById("map"), {
          center: {
            lat: -34.397,
            lng: 150.644
          },
          zoom: 8
        });
      }

    render() {
        return (
            <div>
                <main>
                   <div id="map"></div>
                </main>
            </div>
        )
    }
}

function loadScript(url){
    var index = window.document.getElementById("script")[0];
    var script = window.document.createElement("script");
    script.src=url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script,index)
}

export default Maps
/*    <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      defer
    ></script>*/

    /*
    renderMap=()=>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIZaSyDIDrDBUd6GNL2EIBCxK-K00jKTny8KbuA&callback=initMap")
        window.initMap=this.initMap
    }*/
    











    /*
    	<!-- parent7          -->
		
<div class="pare parent7">
	
	<h5>Contact Me</h5>
	<!--          -->
	<div class="row">
		
		<div class="col">
			<div class="son text-center">
				<i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
				<p>email@email.com</p>
			</div>
		</div>
		<div class="col">
			<div class="son text-center two">
				<i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
				<p>Chicago, US</p>
			</div>
		</div>
		<div class="col">
			<div class="son text-center">
				<i class="fa fa-phone fa-2x" aria-hidden="true"></i>
				<p>512312311</p>
			</div>
		</div>
	</div>
	<!--          -->
	<hr>
	<!--         -->
	<form>
		
	  <div class="form-group">
		<label for="exampleInputEmail1">Name</label>
		<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
	  </div>
		
	  <div class="form-group">
		<label for="exampleInputPassword1">Email</label>
		<input type="password" class="form-control" id="exampleInputPassword1">
	  </div>
		
	  <div class="form-group">
		<label for="exampleInputPassword1">Message</label>
		<input type="password" class="form-control" id="exampleInputPassword1">
	  </div>
		
		<div class="son4">
		  <div class="input-group mb-3">
			  <button type="button" class="btn btn-dark text-uppercase bro"> 
				  
				  <p class="text-capitalize">send message</p>
				  
				  <div class="input-group-prepend">
					  <i class="fa fa-paper-plane" aria-hidden="true"></i>
				  </div>
				  
			   </button>
		   </div>
		</div>
		
	</form>
	
</div>		
	<!-- parent7          -->
*/


/*
.parent7{background-color: #80808080;height: 595px;padding: 35px;}

.parent7 h5{font-weight: 600;letter-spacing: 1px;}

.parent7 .son{background-color: gray;height: 104px;color: white;line-height: 33px;padding-top: 16px;margin-right: -29px;}

.parent7 hr{margin-top: 48px;}

.parent7 .two{background-color: #00bdaa;}




.parent7 .son4{margin-left: -31px;margin-top: 49px;}

.parent7 .son4 .input-group .bro{
	background-color: black!important;
	margin-left: 32px!important;
	color: white!important;
	padding: 12px!important;
	border: 0;
}

.parent7 .son4 .input-group .bro:hover{background-color: #aaa3a3!important;color: black!important}

.parent7 .son4 .input-group .bro p {margin-bottom: -21px!important;font-size: 16px!important;margin-left: 20px!important;}

*/









/*

		
<!--        -->
		
	<div class="parent">
		<!--parent1   -->
		<div class="container parent1">
			<br><br><br><br>
			
			<h4 class="text-center text-uppercase">ABOUT THE CAFE</h4>

			<p class="lead">The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

			<p class="lead">In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>

			<div class="son">
				<p>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</p>

				 <p>Chef, Coffeeist and Owner: Liam Brown</p>
			</div>
			
		</div>
		<!--parent1    -->
		
		<!--parent2    -->
			
			<div class="container parent2">
				
				<img src="images/cafe-csiga.jpg" width="845px" height="500px">
				<h5>
					 Opening hours:<span class="text-muted">  everyday from 6am to 5pm.</span>
				</h5>
				
				<h5>
				    Address: <span class="text-muted"> 15 Adr street, 5015, NY</span>
			    </h5>
				
			</div>
		
		<!--parent2    -->
		
	     <!--parent3    -->
		<div class="container parent3">
		
			<br><br>
			<h4 class="text-center text-uppercase">THE MENU</h4>
			<div class="test">
			 
				<div class="list-group" id="list-tab" role="tablist">

				  <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
				  <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>

				</div>

				<div class="tab-content" id="nav-tabContent">

				  <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
					  <p>Bread Basket</p>
					  <p class="text-muted os">Assortment of fresh baked fruit breads and muffins 5.50</p>

					  <p>Honey Almond Granola with Fruits</p>
					  <p class="text-muted os">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

					  <p>Belgian Waffle</p>
					  <p class="text-muted os">Vanilla flavored batter with malted flour 7.50</p>
					  
					  <p>Scrambled eggs</p>
					  <p class="text-muted os">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
					  
					  <p>Blueberry Pancakes</p>
					  <p class="text-muted os">With syrup, butter and lots of berries 8.50</p>

				  </div>
					
				  <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
					  <p>Bread Basket</p>
					  <p class="text-muted os">Assortment of fresh baked fruit breads and muffins 5.50</p>

					  <p>Honey Almond Granola with Fruits</p>
					  <p class="text-muted os">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

					  <p>Belgian Waffle</p>
					  <p class="text-muted os">Vanilla flavored batter with malted flour 7.50</p>
					  
					  <p>Scrambled eggs</p>
					  <p class="text-muted os">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
					  
					  <p>Blueberry Pancakes</p>
					  <p class="text-muted os">With syrup, butter and lots of berries 8.50</p>
					  
				  </div>

				</div>


            </div>
		</div>
			
	  <!--parent3    -->
*/




/*

/* parent 1   */
/*
.parent .parent1{width: 845px;margin-bottom: 32px}

.parent .parent1 h4 {
    letter-spacing: 2px;
    background-color: black;
    color: white;
    margin-bottom: 60px;
    width: 249px;
    margin-left: 293px;
}

.parent .parent1 .son {
    background-color: #ccf0e130;
    border-left: 8px solid #d0cec5;
    font-size: 18px;
    padding: 18px;
	margin-top: 28px;
}

.parent .parent1> p {font-size: 18px!important;line-height: 30px;}
*/

/* parent 1   */

/* parent 2   */
/*
.parent .parent2{width: 845px;margin-bottom: 32px}

.parent .parent2 img{opacity: 0.7;margin-bottom: 25px;}

.parent .parent2 h5{margin-bottom: 19px;}

.parent .parent2 h5 span{font-size: 17px;}

*/
/* parent 2   */


/* parent 3  */
/*
.parent .parent3{width: 845px;margin-bottom: 32px}

.parent .parent3 h4 {
    letter-spacing: 2px;
    background-color: black;
    color: white;
    margin-bottom: 60px;
    width: 249px;
    margin-left: 293px;
}

.parent .parent3 .test{
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	width: 845px;
    height: 682px;
    padding-left: 34px;
    padding-top: 9px;
}

.parent .parent3 .list-group-item-action {
	width: 45%!important;
	text-align: center!important;
}

.parent .parent3 .list-group {
    display: flex!important;
    flex-direction: row!important;

}
.parent .parent3 .list-group-item.active {
    background-color: #495057c9!important;
    border-color: #495057!important;
}

.parent .parent3 .list-group-item {
    border-radius: 0!important;
    border-top-right-radius: 0!important;
	 padding: 6px!important;
}

.parent .parent3 .list-group-item:last-child{
	 border-top-left-radius: 0!important;
    border-top-right-radius: 0!important;
	    margin-left: 17px!important;
}

.parent .parent3 .tab-content{padding-top: 30px!important;padding-left: 9px!important;}

.parent .parent3 .tab-content .os{margin-bottom: 50px;}

.parent .parent3 .tab-content p{font-size: 18px;}

*/
/* parent 3  */






    /*import React, { useState } from 'react';
import "../Styles/Works.css"
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const Works = (props) => {

    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);


 return (
    <div>
        <div className="container">
            <div className="row">
                <div className="parent">
                    <div className="col-md-4">
                        <img src="images/hh.jpg" className="img" />
                    </div>
                    <div className="col-md-4">
                        <div className="onee">
                            <h2>We Have Legal Solutions</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
                            <p>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                            <div className="soon">
                                <div className="son1 so">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <span>Aperiam iste nam molestias</span>
                                </div>
                                <div className="son2 so">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <span>Modi perferendis ipsa</span>
                                </div>
                                <div className="son3 so">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                    <span>Perspic iste culpa</span>
                                </div>
                             </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                            <div className="twoo">
                              <div>
                                <Button className="text-muted" color="secondary" size="lg" block onClick={toggle1}  style={{ marginBottom: '1rem' }}>How to download and register</Button>
                                <Collapse isOpen={isOpen1}>
                                    <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </CardBody>
                                    </Card>
                                </Collapse>
                                </div>
                                <div>
                                <Button className="text-muted" color="secondary" size="lg" block onClick={toggle2} style={{ marginBottom: '1rem' }}>How to create your paypal account</Button>
                                <Collapse isOpen={isOpen2}>
                                    <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </CardBody>
                                    </Card>
                                </Collapse>
                                </div>
                                <div>
                                <Button className="text-muted" color="secondary" size="lg" block onClick={toggle3} style={{ marginBottom: '1rem' }}>How to link your patpal and bank account</Button>
                                <Collapse isOpen={isOpen3}>
                                    <Card>
                                    <CardBody>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    </CardBody>
                                    </Card>
                                </Collapse>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default Works

/*onClick={toggle1}*/

/*
.parent{
    display: contents;
}

.parent img {
    width: 294px;
    height: 395px;

}

.parent .onee{
    margin-left: -50px;
    margin-right: 43px;
}
.parent .onee h2{
    font-family: 'Kaushan Script', cursive!important;
    margin-bottom: 24px;

}

.parent .onee .soon{
    display: block;

}

.parent .onee .soon span{
    margin-left: 8px;

}

.parent .onee .so{
    margin-bottom: 7px;


}

.parent .twoo .btn-secondary {
    background-color: white!important;
    border-color: #6c757d4d!important;
}

.parent .twoo .card-body {
    background-color: #80808017
}
*/











/*

import React, { Component } from 'react'
import '../Style/FullScreen2.css'
import {Link} from "react-router-dom";



export class FullScreen2 extends Component {
    render() {
        return (
        
            <div className="fullscreen2">
                <div className="sson">
                    <div className="os">
                        <h1>About</h1>
                        <ul className="list-unstyled list">
                            <li className="list-item"><Link to='/'>Home / </Link></li>
                            <li className="list-item">  About</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default FullScreen2
/*<li className="list-item"><Link to='/About'>About</Link></li>*/


/*
.fullscreen2{
    background-image: url("/images/full2.jpg");
    background-size: cover;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
}
.sson{
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 503px;  
}
.fullscreen2 .os {
    color: white;
    position: absolute;
    top: 201px;
    left: 673px;
}
.fullscreen2 .list {display: flex;margin-left: 10px;}

.fullscreen2 .list li:first-child a{color: white;}

.fullscreen2 .list li:first-child a:hover{text-decoration: none;}

.fullscreen2 .list li:last-child {color: gainsboro;}*/