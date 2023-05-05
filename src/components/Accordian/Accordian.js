import './Accordian.scss'

import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import React, {useState} from 'react'

import {AiOutlineLink} from 'react-icons/ai'

function Accordian({title, data}) {
	const [showAccordian, setShowAccordian] = useState(true)
	return (
		<div className='portfolio-accordian'>
			<div className='header'>
				<div className='title'>
					<h3>{title}</h3>
					<a href={data.url}>
						<AiOutlineLink />
					</a>
					<span>{data.duration}</span>
				</div>
				<span
					role='button'
					className='dropdown-icon'
					onClick={() => setShowAccordian(!showAccordian)}
				>
					{!showAccordian ? <BsChevronDown /> : <BsChevronUp />}
				</span>
			</div>
			{showAccordian && (
				<div className='content'>
					<ul>
						{data.description.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Accordian
