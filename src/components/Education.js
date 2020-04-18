import React from 'react'

function Education({EducationObj}) {
    return (
        <div>
            {
                EducationObj.map((Obj,index)=>{
                    return(
                        <div
                            className="project_list_item">
                            <p>{Obj.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Education
