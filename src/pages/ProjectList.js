import {AiFillGithub} from 'react-icons/ai'
import {Badge} from 'react-bootstrap'
import React from 'react'

function ProjectList({ProjectListVal}) {
	return (
		<div>
			{ProjectListVal &&
				ProjectListVal.sort((a, b) => {
					if (a.title > b.title) return 1
					if (a.title < b.title) return -1
					return 0
				}).map((Obj, index) => {
					return (
						<a
							href={Obj.projectRoute}
							key={`project-list-item-${index}`}
							className='project_list_item_link'
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
								className='project_list_item'
							>
								<h3>
									{Obj.title}
									{Obj.githubUrl && (
										<a href={Obj.githubUrl}>
											<AiFillGithub className='projectGithubIcon' />
										</a>
									)}
								</h3>
								{Object.keys(Obj.badgeTitle).map((item, index) => {
									return (
										<Badge pill variant='primary' className='chip' key={index}>
											{Obj.badgeTitle[item]}
										</Badge>
									)
								})}
								<p>{Obj.description}</p>
							</div>
						</a>
					)
				})}
		</div>
	)
}

export default ProjectList
