'use client';
import styled from 'styled-components'

const StyledTableHeaderRow = styled(TableHeaderRow)`
	background-color: green;
	color: white;
	font-weight: bold;
`

function TableHeaderRow({children}) {
	return (
		<tr>
			{children}
		</tr>
	)
}

export default StyledTableHeaderRow;
