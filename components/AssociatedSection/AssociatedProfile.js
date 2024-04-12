'use client';
import styled from 'styled-components'

import ProfileImage from '../Profile/ProfileImage'

const Container = styled.div`
	flex-direction: row;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0.5rem;
	border: 1px solid gray;
	border-radius: 5px;
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.1rem;
	padding-left: 0.5rem;
`

const ProfileName = styled.span`
	font-weight: bold;
`

const ProfileHeadline = styled.span`
	font-size: small;
`

function AssociatedProfile({profileName, profileHeadline}) {
  return (
		<Container>
			<ProfileImage circled size='small' />
			<InfoContainer>
				<ProfileName>{profileName}</ProfileName>
				<ProfileHeadline>{profileHeadline}</ProfileHeadline>
			</InfoContainer>
		</Container>
	);
}

export default AssociatedProfile;
