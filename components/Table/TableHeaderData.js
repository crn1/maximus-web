'use client';
import styled from 'styled-components'

const StyledTableHeaderData = styled(TableHeaderData)`
	font-weight: bold;
`

function TableHeaderData({children}) {
	return (
		<th>
			{children}
		</th>
	)
}

export default StyledTableHeaderData;
