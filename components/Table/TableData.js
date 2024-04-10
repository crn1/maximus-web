'use client';
import styled from 'styled-components'

const StyledTableData = styled(TableData)`
	color: pink;
`

function TableData({children}) {
	return (
		<td>
			{children}
		</td>
	)
}

export default StyledTableData;
