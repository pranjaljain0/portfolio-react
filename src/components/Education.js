import 'react-vertical-timeline-component/style.min.css'

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import React from 'react'
import {RiBuildingLine} from 'react-icons/ri'

function Education({EducationObj}) {
	return (
		<VerticalTimeline className='VerticalTimeline'>
			{EducationObj.map((Obj, index) => {
				return (
					<VerticalTimelineElement
						key={index}
						className='vertical-timeline-element--work'
						contentStyle={{background: Obj.color, color: Obj.text}}
						contentArrowStyle={{borderRight: '7px solid ' + Obj.color}}
						date={Obj.duration}
						iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
						icon={<RiBuildingLine />}
					>
						<h2 className='vertical-timeline-element-title'>{Obj.title}</h2>
						<h5 className='vertical-timeline-element-subtitle'>
							{Obj.location_city}
						</h5>
						<h6 className='vertical-timeline-element-subtitle'>
							{Obj.location_state}
						</h6>
						<h6 className='vertical-timeline-element-subtitle'>
							{Obj.location_country}
						</h6>
						<p>{Obj.description}</p>
						<p>{Obj.sec_details}</p>
					</VerticalTimelineElement>
				)
			})}
		</VerticalTimeline>
	)
}

export default Education
