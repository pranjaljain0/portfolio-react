import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Social = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;

const SocialIcons = styled.div`
  display: flex;
  width: 100%;
`;

const Icon = styled.div`
  flex: 1;
  text-align: center;
  margin: 20px;
  padding: 20px;
  background-color: #ebf2fa;
  border-radius: 11px;
  cursor: pointer;
  vertical-align: middle;
  background: #d6249f;
  ${(props) => {
    if (props.label === "instagram") {
      return "background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);";
    } else if (props.label === "github") {
      return "background: linear-gradient(to top, #7dbbe6 0%,#00acee 100%);";
    } else if (props.label === "linkedin") {
      return "background: linear-gradient(to top, #0e76a8 0%,#00acee 100%);";
    }
  }}
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  color: #fff;
  & svg {
    flex: 1;
    height: 50px;
  }
`;

function SocialModal({ SocialModalObj }) {
  return (
    <Social>
      <SocialIcons>
        <Icon label="github">
          <AiOutlineGithub size={30} />
          <p>@pranjaljain0</p>
        </Icon>
        <Icon label="linkedin">
          <AiOutlineLinkedin size={30} />
          <p>@pranjal-jain-736552139</p>
        </Icon>
      </SocialIcons>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Email address"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Description</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <InputGroup className="mb-3 ButtonGroup">
        <Button variant="outline-secondary">Submit</Button>
      </InputGroup>
    </Social>
  );
}

export default SocialModal;
