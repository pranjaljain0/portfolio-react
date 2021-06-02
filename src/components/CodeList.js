import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	color: #1d1d1d;
`

const Table = styled.table`
	width: 100%;
	background-color: #1d1d1d;
	color: #fff;
	border-radius: 11px;
	overflow: hidden;
`
const TR = styled.tr`
	display: flex;
	background-color: ${(props) => (props.index % 2 ? '#1d1d1d' : '#1d3557')};
`

const TD = styled.td`
	flex: 1;
	padding: 20px;
`

function CodeList({CodeListVal}) {
	return (
		<Card>
			<Table>
				{CodeListVal.map((Obj, index) => {
					return (
						<div key={index}>
							<TR index={index}>
								<TD>{Obj.title}</TD>
								<TD>{Obj.level}</TD>
							</TR>
						</div>
					)
				})}
			</Table>
		</Card>
	)
}

export default CodeList
