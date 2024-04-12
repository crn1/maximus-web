'use client';
import styled from 'styled-components'

import TableHeaderRow from './TableHeaderRow'
import TableHeaderData from './TableHeaderData'
import TableRow from './TableRow'
import TableData from './TableData'

const StyledTable = styled.table`
	border-top: 1px solid grey;
	border-bottom: 1px solid grey;
	width: 100%;
`

function Table(props) {
	const headerItems = props.headerItems.map(item =>
		<TableHeaderData>{item}</TableHeaderData>
	);

  return (
		<StyledTable>
			<thead>
				<TableHeaderRow>
					{ headerItems }
				</TableHeaderRow>
			</thead>
			<tbody>
				{ props.children }
			</tbody>
		</StyledTable>
  );
}

export default Table;
