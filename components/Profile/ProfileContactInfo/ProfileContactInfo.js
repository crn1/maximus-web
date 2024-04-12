'use client';
import styled from 'styled-components'

import SimpleSection from '../../SimpleSection/SimpleSection'

import ProfileContactItem from './ProfileContactItem'

const Container = styled.div`
	display: flow-root;
`

function ProfileContactInfo() {
  return (
		<SimpleSection>
			<Container>
				<ProfileContactItem contact='gluvajic.work@gmail.com' />
				<ProfileContactItem contact='+38162291745' />
				<ProfileContactItem contact='linkedin.com/in/george-gluvajic/' />
				<ProfileContactItem contact='github.com/crn1' />
				<ProfileContactItem />
				<ProfileContactItem />
				<ProfileContactItem />
			</Container>
		</SimpleSection>
	);
}

export default ProfileContactInfo;
