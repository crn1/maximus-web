'use client';
import styled from 'styled-components'

import SimpleSection from '../../SimpleSection/SimpleSection'
import ProfileFieldsItem from './ProfileFieldsItem'

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	row-gap: 0.5rem;
	column-gap: 2rem;
`

function ProfileFields() {
  return (
		<SimpleSection>
			<Wrapper>
				<ProfileFieldsItem fieldName='Current Company' fieldValue='Starmode.io Recruiting' />
				<ProfileFieldsItem fieldName='Current Position' fieldValue='Sole Proprietor' />
				<ProfileFieldsItem fieldName='Skills' fieldValue='React.js, Next.js' />
				<ProfileFieldsItem fieldName='Current Salary' fieldValue='100k RSD / month' />
				<ProfileFieldsItem fieldName='Desired Salary' fieldValue='120k RSD / month' />
				<ProfileFieldsItem fieldName='Birthday' fieldValue='21.2.2000.' />
				<ProfileFieldsItem fieldName='Univesiry' fieldValue='Faculty of Technical Sciences' />
				<ProfileFieldsItem fieldName='Degree' fieldValue='Faculty of Technical Sciences' />
				<ProfileFieldsItem fieldName='Notes' fieldValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
				<ProfileFieldsItem fieldName='About' fieldValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Sollicitudin ac orci phasellus egestas tellus rutrum. Egestas dui id ornare arcu odio. Augue eget arcu dictum varius duis at consectetur lorem donec' />
			</Wrapper>
		</SimpleSection>
	);
}

export default ProfileFields;
