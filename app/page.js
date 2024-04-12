import Link from 'next/link'

import Table from '../components/Table/Table.js'
import TableRow from '../components/Table/TableRow.js'
import TableData from '../components/Table/TableData.js'


export default function Page() {
  return (
		<>
			<Table headerItems={['Name', 'Headline', 'Current Company', 'Tags']}>
				<TableRow>
					<TableData><Link href='./candidate'>George Gluvajic</Link></TableData>
					<TableData>Technical Recruiter</TableData>
					<TableData>Starmode Recruiting</TableData>
					<TableData>react, recruiter, tech</TableData>
				</TableRow>
			</Table>
		</>
	);
}
