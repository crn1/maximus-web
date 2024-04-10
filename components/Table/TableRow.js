'use client';
import styled from 'styled-components'

const StyledTableRow = styled(TableRow)`
	&:nth-child(even){
		background-color: #f2f2f2;
	}
`

function TableRow({children}) {
	return (
		<tr>
			{children}
		</tr>
	)
}

export default StyledTableRow;
