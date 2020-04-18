import React from 'react'

function CodeList({CodeListVal}) {
    return (
        <div>
            {
                CodeListVal.map((Obj,index)=>{
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

export default CodeList
