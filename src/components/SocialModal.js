import React from 'react'

function SocialModal({SocialModalObj}) {
    return (
        <div>
            {
                SocialModalObj.map((Obj,index)=>{
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

export default SocialModal