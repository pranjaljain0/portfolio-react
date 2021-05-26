import React from 'react'

function WorkExp({WorkExpObj}) {
	return (
		<div>
			{WorkExpObj.map((Obj, index) => {
				return (
					<div className='project_list_item'>
						<p>{Obj.title}</p>
					</div>
				)
			})}
		</div>
	)
}

export default WorkExp
