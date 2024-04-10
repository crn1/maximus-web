'use client';
import styled from 'styled-components'

import TableHeaderRow from './TableHeaderRow'
import TableHeaderData from './TableHeaderRow'
import TableRow from './TableRow'
import TableData from './TableRow'

const StyledTable = styled(Table)`
	border: 1px solid black;
`

function Table() {
  return (
		<table>
			<TableHeaderRow>
				<TableHeaderData>
					john
				</TableHeaderData>
				<TableHeaderData>
					doe
				</TableHeaderData>
			</TableHeaderRow>
			<TableRow>
				<TableData>
					john
				</TableData>
				<TableData>
					doe
				</TableData>
			</TableRow>
			<TableRow>
				<TableData>
					john
				</TableData>
				<TableData>
					mnoe
				</TableData>
			</TableRow>
		</table>
  );
}

export default StyledTable;
