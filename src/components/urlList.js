import { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import { Desktop, Mobile } from "./containers";

const ListContainer = styled.div`
  background-color: #bfbfbf;
  position: absolute;
  width: 101%;
  z-index: -1;
  top: 47.5rem;
  left: -1rem;
  padding-top: 7rem;
  font-family: "Poppins", sans-serif;
`;

const LeftUrl = styled.div`
  margin: 1rem;
  margin-left: 2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  line-height: 4rem;
  overflow: hidden;
`;

const LeftUrlMob = styled(LeftUrl)`
  margin: 0rem;
  padding-left: 1rem;
  width: 100%;
  border-bottom-width: 100%;
  border-bottom-style: solid;
  border-bottom-color: #bfbfbf;
  margin-right: auto;
  border-width: 1px;
`;

const RightUrl = styled.div`
  margin: 1rem;
  margin-right: 2rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  color: #2acfcf;
`;

const RightUrlMob = styled(RightUrl)`
  margin: 0rem;
  margin-right: auto;
  margin-left: 1rem;
  overflow: hidden;
`;

const CopyButton = styled(Button)`
  margin: 0rem;
  margin-left: 1rem;
  width: 6rem;
  border-radius: 0.5rem;
  cursor: pointer;

  background-color: ${(props) => (props.visited ? "#3b3054" : "#2acfcf")};
`;

const CopyButtonMob = styled(CopyButton)`
  margin: 0rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  width: auto;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

const ListItemMob = styled(ListItem)`
  flex-direction: column;
`;

const ListView = styled.div`
  width: 94.5%;
  height: 17rem;
  margin-left: 1.5rem;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const copyToClip = (text) => {
  navigator.clipboard.writeText(text);
};

const ListItems = (props) => {
  const [didVisit, setdidVisit] = useState(false);
  return (
    <ListItem>
      <LeftUrl>{props.url}</LeftUrl>
      <RightUrl>
        {props.srtUrl}
        <CopyButton
          onClick={() => {
            copyToClip(props.srtUrl);
            setdidVisit(true);
          }}
          visited={didVisit}
        >
          {didVisit ? "Copied" : "Copy"}
        </CopyButton>
      </RightUrl>
    </ListItem>
  );
};

const ListItemsMob = (props) => {
  const [didVisit, setdidVisit] = useState(false);
  return (
    <ListItemMob>
      <LeftUrlMob>{props.url}</LeftUrlMob>
      <RightUrlMob>{props.srtUrl}</RightUrlMob>
      <CopyButtonMob
        onClick={() => {
          copyToClip(props.srtUrl);
          setdidVisit(true);
        }}
        visited={didVisit}
      >
        {didVisit ? "Copied" : "Copy"}
      </CopyButtonMob>
    </ListItemMob>
  );
};

const UrlList = (props) => {
  let idx = 0;
  return (
    <ListContainer>
      <Desktop>
        <ListView>
          {props.list.map((item) => {
            idx++;
            return <ListItems url={item[0]} srtUrl={item[1]} key={idx} />;
          })}
        </ListView>
      </Desktop>
      <Mobile>
        <ListView>
          {props.list.map((item) => {
            idx++;
            return <ListItemsMob url={item[0]} srtUrl={item[1]} key={idx} />;
          })}
        </ListView>
      </Mobile>
    </ListContainer>
  );
};

export default UrlList;
