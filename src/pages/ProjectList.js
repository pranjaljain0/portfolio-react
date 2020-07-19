import React, { useState } from "react";
import { Badge } from "react-bootstrap";

function ProjectList({ ProjectListVal }) {
  return (
    <div>
      {ProjectListVal.map((Obj, index) => {
        return (
          <a href="#" className="project_list_item_link">
            <div
              style={{
                background:
                  `linear-gradient(120deg,` +
                  Obj.initialColor +
                  `,` +
                  Obj.finalColor +
                  `)`,
              }}
              className="project_list_item"
            >
              <Badge pill variant="primary">
                {Obj.badgeTitle}
              </Badge>
              <p>{Obj.title}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ProjectList;
