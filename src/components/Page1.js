import React from 'react'
import './Page1.css'
import { Row, Col,  Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { TfiLocationPin } from 'react-icons/tfi'
import { FaCarSide ,FaUsers } from 'react-icons/fa';
import {FaFacebook  } from 'react-icons/fa';
import {FaTwitter  } from 'react-icons/fa';
import {FaInstagram  } from 'react-icons/fa';
import {FaGoogle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Page1 = () => {
  return (
    <>
    <div className='header'>
        <div className="container">
            <div className="text">
              <h3 className='my-1'>logo</h3>
            </div>   
            <div className="testheader">
            <h3>CAR SERVICE</h3>
            <h1>Travel in <br/>luxury and <br/>style</h1>
            </div>
        </div>
    </div>
   
<div>
 <Container>
    <Row >
        <Col md={8}>
            <div>
             <div className='blackbox'>
            </div>
            <img className="first"src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/07a9666d670150be8047edcd/billionphotos1010979min.jpg" alt="car"></img>
            </div>
          </Col>
          <Col md={4}>
          <div className='blackline'>
            <h2 className='tx1'>Best Car</h2>
            <h3 className='tx2'>SERVICE</h3>
            <p className='tx3'>A regular service schedule can help keep your car running at it’s best.
                 A regular service schedule can help keep your car running at it’s best.</p>
            <button type="button" className="Readbtn btn-dark">Read more</button>
            </div>
        </Col>
    </Row>
    </Container>
</div>


 <div className='SecondRow'>
  <Row>
    <Col md={3}>
      <h3 className='Rental my-5' >RENTAL CAR SERVICES</h3>
      <p className='Find my-1'>Find the best possible rental car rate.
         Compare rates worldwide and save up to 60% on deals from over 1,053 car rental companies.</p>
    </Col>
    <Col md={3}>
      <TfiLocationPin fontSize="110px" className='my-4'/>
      <h3 className='my-4'>LOCATION</h3>
      
    </Col>
    <Col md={3} >
     < FaCarSide fontSize="110px" className='my-4'/> 
     <h3 className='my-4'>250+ CARS</h3>
      
    </Col>
    <Col md={3}>
      <FaUsers fontSize="110px" className='my-4'/>
      <h3 className='my-4'>HAPPY USERS</h3>        
    </Col>
  </Row>
 </div>

 <div className='ThirdRow'>
  <Row>
    <Col md={5}>
    
      <div >
        <img className='thumbnail' src="https://img.freepik.com/free-photo/stylish-black-woman-car-salon_1157-21421.jpg" alt="" />
      </div>  
    </Col>
    <Col md={5}>
      <div className='madbox'>
        <h2 className='text1'>CAR RENTAL</h2>
        <h3 className='text4'>Service</h3>
        <p className='text2'>
          A regular service schedule can help keep your car running at its best. <br />
          A regular service schedule can help keep your car running at its best.
        </p>
      </div>
    </Col>
    </Row>
    <Row>
    <Col md={6}>
      <div>
        <h2 className='text3'>SEARCH 36,000+ CAR RENTAL LOCATIONS WORLDWIDE</h2>
        <p className='text5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </p>
        <button  className="btnfind btn btn-danger">Find Cars Details</button>
      </div>
    </Col>
    <Col md={6}>
    <div >
      <img className='img1' src="https://media.istockphoto.com/id/1051821044/photo/friends-dancing-at-car-interior.jpg?s=612x612&w=0&k=20&c=XDVgY5QWsnRHHPSuIO8uU9P4ByTkkkfpL8Y3qqIfaXY=" alt="" />
      </div>

    </Col>
</Row>
<Row>
    <Col md={8}>
        <div >
      <img className='carimg2' src="https://freerangestock.com/sample/129502/black-car-.jpg" alt="" />
      </div>
    </Col>

    <Col md={4}>
      <div className='cartext'>
        <h2 className='text5'>Safe. Relaxing.<br />Good to ride in.</h2>
        <button className="carbutton btn btn-danger">
            <span >Read More</span></button>
      </div>
    </Col>
  </Row>
</div>
<div className="container2">
  <h3 className='t1'>OUR TECHNOLOGIES</h3>
  <div className='container3'>
  <Row>
    <Col md={3}>
        <img src="https://images01.nicepage.com/d4/59/d459afc2165bd356465b67137677beca.png" alt=""></img>
        <h3 className='my-4'>SMARTLINQ</h3>
    </Col>
    <Col md={3}>
        <img src="https://images01.nicepage.com/fe/a9/fea9470f91f7e42de415eb02d5347e26.png" alt=""></img>
        <h3 className='my-4'>Epiq</h3>
        
    </Col>
    <Col md={3}>
        <img src="https://images01.nicepage.com/01/94/01946e8223d3360e8f4566195ce53ab1.png" ></img>    
        <h3 className='my-4'>Apex</h3>
    </Col>
    <Col md={3}>
        <img src="https://images01.nicepage.com/a3/20/a320795635bf6543ba2a588ababe6830.png"></img>    
        <h3 className='my-4'>SMARTAIR</h3>     
    </Col>
  </Row>
  </div>
</div>
<div className="container4 mt-7 ">
<Row>
    
    <Col md={7}>
        <div >
         <img className='imgg' src="https://www.tciships.com/editor/images/transport-a-vehicle.jpg" alt=""></img>
        </div>
    </Col>
    <Col md={5} >
      <div className='cartext1'>
            <h1 className='text6' >History Of Red Oval</h1> 
            <p className='text7'>Since 1939, Peterbilt has consistently set new standards for quality, reliability, performance and innovation. Our dedicated focus on serving the full range of customer needs and providing industry-leading satisfaction extends well beyond the sale of a new truck. Peterbilt and its dealer network support customers through exceptional service, parts sales, financing,
             leasing and rental, and advanced technologies. </p>

            <h3 className='text8'>Today, you can purchase a Red Oval Certified truck with ease knowing your truck is the next best thing to new.</h3>
            </div>
    </Col>
</Row>          
</div>
        
    
     {/*<div className='container5 mt-5'>
        <Row>
            <Col md={8}>
            <img src="https://metro.co.uk/wp-content/uploads/2016/11/screenshot_12.jpg?quality=90&strip=all&zoom=1&resize=644%2C362" alt="" />
            </Col>
            </Row>
        <Row>
            <Col md={4}>
            <img src="https://bulletproofautomotive.com/wp-content/uploads/2022/10/Vorsteiner-VRS-Carbon-Fiber-Aero-Rear-Diffuser-for-Type-4S-Audi-R8-Installed.webp" alt="" />
            </Col>
            <Col md={4}>
            <div >
            <h1>Bask in the limelight</h1>
            <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            </Col>
            <Col md={4}>
            <div>
            <h1>R8 Coupe Trims</h1>
            <button type="button" className="btn btn-danger">Read More</button>
            </div>
            </Col>
            <Col md={4}>
            <img src="https://static.carthrottle.com/workspace/uploads/posts/2018/02/a68aed9d875bb46d6306adc585bf00b6.jpg" alt="" />
            </Col>
        </Row>
  </div>
      <div className='container4'>
        <div className='contact-box'>
          <div className='left'></div>
          <div className='right'>
            <h2>Contact Us</h2>
            <input type="text" className="field" placeholder='Enter Your Valid Name' />
            <input type="email" className="field" placeholder='Enter Your Valid Email' />
            <textarea className="field" placeholder='Enter Your Message'/>
          </div>
        </div>
</div>*/}
<div className="grid-container">
    <Row>
       
        <Col md={6}>
        <div className='Last'>
        <h1 className='t2'>LOCATION</h1>
        <p className='t3'>28 Jackson Blvd Ste 1020 ChicagoIL 60604-2340 </p>
        <h3 className='t4'>FOLLOW US</h3>
        {/* <Row>
            <Col >
            <FaFacebook fontSize="35px" className='my-5'/>
            </Col>
            <Col >
            <FaTwitter fontSize="35px" className='my-5'/>
            </Col>
            <Col >
            <FaInstagram fontSize="35px" className='my-5'/>
            </Col>
            <Col >
            <FaGoogle fontSize="35px" className='my-5'/>
            </Col>

        </Row> */}
        <div >
        <FaFacebook fontSize="35px" className='m-3'/>
        <FaTwitter fontSize="35px" className='m-3'/>
        <FaInstagram fontSize="35px" className='m-3'/>
        <FaGoogle fontSize="35px" className='m-3'/>
        </div>
        </div>
        </Col>
        <Col md={4}>
            <div className="item2">
            <div className="fcf-body">

            <div id="fcf-form">
            <h3 className="fcf-h3">Contact us</h3>

            <form id="fcf-form-id" className="fcf-form-class" method="post" action="contact-form-process.php">
                
                <div className="fcf-form-group">
                    <label htmlFor="Name" className="fcf-label">Your name</label>
                    <div className="fcf-input-group">
                        <input type="text" id="Name" name="Name" className="fcf-form-control" required/>
                    </div>
                </div>

                <div className="fcf-form-group">
                    <label htmlFor="Email" className="fcf-label">Your email address</label>
                    <div className="fcf-input-group">
                        <input type="email" id="Email" name="Email" className="fcf-form-control" required/>
                    </div>
                </div>

                <div className="fcf-form-group">
                    <label htmlFor="Message" className="fcf-label">Your message</label>
                    <div className="fcf-input-group">
                        <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                    </div>
                </div>

                <div className="fcf-form-group">
                    <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-danger fcf-btn-lg fcf-btn-block">Send Message</button>
                </div>

            </form>
            </div>
        </div>
        </div>
    </Col>    
 </Row>
</div>
    </>
  );
}

export default Page1
