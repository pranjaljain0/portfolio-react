import React from "react";
import { Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function ProjectList({ ProjectListVal }) {
  const history = useHistory();

  return (
    <div>
      {ProjectListVal &&
        ProjectListVal.map((Obj, index) => {
          return (
            <span
              key={`project-list-item-${index}`}
              className="project_list_item_link"
              onClick={() => Obj?.id && history.push(`/project/${Obj.id}`)}
            >
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
                <Badge pill variant="secondary">
                  {Obj.language}
                </Badge>
                <p>{Obj.title}</p>
              </div>
            </span>
          );
        })}
    </div>
  );
}

export default ProjectList;
