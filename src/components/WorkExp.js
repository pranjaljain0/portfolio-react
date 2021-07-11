import Accordian from './Accordian/Accordian'
import React from 'react'

function WorkExp({WorkExpObj}) {
	return (
		<div>
			{WorkExpObj.map((Obj, index) => {
				return <Accordian key={index} title={Obj.title} data={Obj} />
			})}
		</div>
	)
}

export default WorkExp
