import React, { useEffect , useState } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import avatar from "assets/img/faces/face-3.jpg";
import {updateUserAPI} from "../config";



function UserProfile(props) {
    const [name, setName] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [website, setWebsite] = useState('');
    const [location,setLocation] = useState('');
    const[aboutcompany,setAboutcompany] = useState('');



    useEffect(() => {
          _OnAcceptProfile();
          _OnRejectProfile();
    }, []);


    async function _OnAcceptProfile() {
        try {
            let data= {name,phonenumber,email,companyname,website,aboutcompany,location,};
            let res = await axios.patch(updateUserAPI, data, );
            console.log('res:',res);
            props.history.push('/')
        } catch (e) {
            console.log('Error', e);
        }
    }

    async function _OnRejectProfile() {
        try {
            let data= {name,phonenumber,email,companyname,website,aboutcompany,location,};
            let res = await axios.patch(updateUserAPI, data, );
            console.log('res:',res);
            props.history.push('/')
        } catch (e) {
            console.log('Error', e);
        }
    }



    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={name}
                description={
                  <span>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
            
            <Col md={12}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "Creative Code Inc.",
                          disabled: true
                        },
                        {
                          id:"name",
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "name",
                          value : name,
                         onChange : (event) =>
                         {
                            // alert(event.target.value)
                              setName(event.target.value)
                         }
                        },
                          {
                              id:"email",
                              label: "Email Address",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "email",
                              value : email,
                              onChange : (event) =>
                              {
                                  // alert(event.target.value)
                                  setEmail(event.target.value)
                              }

                          }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                          {
                              id:"phone number",
                              label: "Phone Number",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "phone number",
                              value : phonenumber,
                              onChange : (event) =>
                              {
                                  // alert(event.target.value)
                                  setPhonenumber(event.target.value)
                              }
                          },
                          {
                              id:"website",
                              label: "Website",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "website",
                              value : website,
                              onChange : (event) =>
                              {
                                  // alert(event.target.value)
                                  setWebsite(event.target.value)
                              }

                          },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                          {
                              id:"location",
                              label: "Location",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "location",
                              value : location,
                              onChange : (event) =>
                              {
                                  // alert(event.target.value)
                                  setLocation(event.target.value)
                              }

                          }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="aboutcompany">
                          <ControlLabel>About Company</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            value={aboutcompany}
                            onChange={event => setAboutcompany(event.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    
                    <Button style={{marginRight: "10px"}} bsStyle="primary" pullRight fill type="submit">
                      Accept Profile
                    </Button> 
                    </Col>
                     <Col>
                    <Button style={{marginRight: "10px"}} bsStyle="danger" pullRight fill type="submit">
                      Reject Profile
                    </Button> 
                    </Col>
                    </Row>
                    <div className="clearfix" />
                  </form>
                  
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
}

export default UserProfile;
