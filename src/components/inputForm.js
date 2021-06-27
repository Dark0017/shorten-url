import { useState } from "react";
import axios from "axios";
import validator from "validator";
import { Desktop, Mobile } from "./containers";
import Button from "./button";
import styled from "styled-components";
import InputBoxBg from "../assets/bg-shorten-desktop.svg";
import InputBoxBgMob from "../assets/bg-shorten-mobile.svg";

const FlexBox = styled.div`
  position: relative;
  margin-top: 3rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  width: 96.9%;
  border-radius: 0.5rem;
  justify-content: center;
  background: url(${InputBoxBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #3b3054;
  font-family: "Poppins", sans-serif;
`;

const FlexBoxMob = styled(FlexBox)`
  flex-direction: column;
  background: url(${InputBoxBgMob});
  background-repeat: no-repeat;
  background-size: 14rem;
  background-position: top right;
  background-color: #3b3054;
`;

const TextInput = styled.input`
  margin: 3.3rem;
  margin-right: 0.75rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
  padding-left: 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => (props.isValid ? "#9e9aa7" : "#f46262")};
  box-shadow: ${(props) =>
    props.isValid ? "none" : "0px 0px 0px 3px #f46262"};
  width: 70%;
`;

const TextInputMob = styled(TextInput)`
  margin: 1rem;
  padding: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: ${(props) => (props.isValid ? "#9e9aa7" : "#f46262")};
  box-shadow: ${(props) =>
    props.isValid ? "none" : "0px 0px 0px 2px #f46262"};
  align-self: center;
`;

const SubmitButton = styled(Button)`
  margin: 3.3rem;
  margin-left: 0.75rem;
  border-radius: 0.5rem;
  width: 20%;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;

  &:active {
    background-color: #47d6d6;
  }
`;

const SubmitButtonMob = styled(SubmitButton)`
  margin: 1rem;
  padding: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  font-size: 1rem;
  font-weight: 700;
  width: 80%;
  align-self: center;
`;

const AlertText = styled.span`
  position: absolute;
  color: #f46262;
  left: 3.2rem;
  bottom: 1.5rem;
  font-style: italic;
`;

const AlertTextMob = styled(AlertText)`
  left: 2rem;
  bottom: 4.5rem;
  font-size: 0.66rem;
  font-weight: 500;
`;

const handleSubmit = async (text) => {
  let res;
  if (true) {
    try {
      res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${text}`);
    } catch (e) {
      console.log("API rejected the request with error:\n", e);
    }
    let list = localStorage.getItem("links");
    if (list === null) {
      list = JSON.stringify([]);
    }
    list = JSON.parse(list);
    if (!res) {
      alert("Shortening failed");
    }
    if (res) {
      alert("Shortening finished");
    }
    list.push(res ? [text, res.data.result.short_link] : [text]);
    localStorage.setItem("links", JSON.stringify(list));
  }
};

const InputBox = () => {
  const [inText, setInText] = useState("");
  const [isValid, setIsValid] = useState(true);

  return (
    <div>
      <Desktop>
        <FlexBox>
          <TextInput
            placeholder="Shorten a link here..."
            onChange={(e) => {
              setInText(e.currentTarget.value);
            }}
            isValid={isValid}
          ></TextInput>
          <SubmitButton
            onClick={() => {
              if (validator.isURL(inText)) {
                handleSubmit(inText);
                setIsValid(true);
              } else {
                setIsValid(false);
              }
            }}
          >
            Shorten it!
          </SubmitButton>
          <AlertText>{isValid ? "" : "Please add a link"}</AlertText>
        </FlexBox>
      </Desktop>
      <Mobile>
        <FlexBoxMob>
          <TextInputMob
            placeholder="Shorten a link here..."
            onChange={(e) => {
              setInText(e.currentTarget.value);
            }}
            isValid={isValid}
          ></TextInputMob>
          <AlertTextMob>{isValid ? "" : "Please add a link"}</AlertTextMob>
          <SubmitButtonMob
            onClick={() => {
              if (validator.isURL(inText)) {
                handleSubmit(inText);
                setIsValid(true);
              } else {
                setIsValid(false);
              }
            }}
          >
            Shorten it!
          </SubmitButtonMob>
        </FlexBoxMob>{" "}
      </Mobile>
    </div>
  );
};
export default InputBox;
