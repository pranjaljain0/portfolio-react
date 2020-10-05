import React from "react";
import styled from "styled-components";
import { HOBBY_ICONS } from "../constants/hobby";

function hobbyIconCheck(iconName, size) {
  const HobbyIcon = HOBBY_ICONS[iconName];
  return <HobbyIcon color="#fff" size={size} />;
}

const Card = styled.div`
  color: #1d1d1d;
`;

const Table = styled.table`
  width: 100%;
  background-color: #1d1d1d;
  color: #fff;
  border-radius: 11px;
  overflow: hidden;
`;
const TR = styled.tr`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.index % 2 ? "#1d1d1d" : "#1d3557")};
`;

const TD = styled.td`
  flex: 1;
  padding: 20px;
`;

const HobbyIcon = styled.div`
  margin-left: 10px;
`;

function Hobby({ HobbyListVal }) {
  return (
    <Card>
      <Table>
        {HobbyListVal.map((Obj, index) => {
          return (
            <TR index={index}>
              <HobbyIcon className="hobbyIcon">
                {hobbyIconCheck(Obj.hobbyIcon, "30px")}
              </HobbyIcon>
              <TD>{Obj.title}</TD>
            </TR>
          );
        })}
      </Table>
    </Card>
  );
}

export default Hobby;
