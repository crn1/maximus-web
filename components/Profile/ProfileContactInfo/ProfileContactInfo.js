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
				<ProfileContactItem iconClass='bi bi-envelope' contact='gluvajic.work@gmail.com' />
				<ProfileContactItem iconClass='bi bi-phone' contact='+38162291745' />
				<ProfileContactItem iconClass='bi bi-linkedin' contact='linkedin.com/in/george-gluvajic/' />
				<ProfileContactItem iconClass='bi bi-github' contact='github.com/crn1' />
				<ProfileContactItem iconClass='bi bi-globe' contact='starmode.io' />
			</Container>
		</SimpleSection>
	);
}

export default ProfileContactInfo;
