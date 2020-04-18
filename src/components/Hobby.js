import React from 'react'

function Hobby({HobbyListVal}) {
    return (
        <div>
            {
                HobbyListVal.map((Obj,index)=>{
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

export default Hobby
