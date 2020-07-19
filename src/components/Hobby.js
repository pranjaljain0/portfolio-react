import React from "react";
import styled from "styled-components";

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
  background-color: ${(props) => (props.index % 2 ? "#1d1d1d" : "#1d3557")};
`;

const TD = styled.td`
  flex: 1;
  padding: 20px;
`;

function Hobby({ HobbyListVal }) {
  return (
    <Card>
      <Table>
        {HobbyListVal.map((Obj, index) => {
          return (
            <TR index={index}>
              <TD>{Obj.title}</TD>
            </TR>
          );
        })}
      </Table>
    </Card>
  );
}

export default Hobby;
