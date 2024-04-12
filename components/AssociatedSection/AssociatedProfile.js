'use client';
import Link from 'next/link'
import styled from 'styled-components'

import ProfileImage from '../Profile/ProfileImage'

const Container = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
	width: calc(100%/4 - 4*0.5rem);
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

const Icon = styled.i`
	color: black;
	font-size: 2rem;
`

function AssociatedProfile({profileName, profileHeadline, iconClass, href}) {
  return (
		<Container>
			{ iconClass ?
				<Icon className={iconClass} /> :
				<ProfileImage circled size='small' />
			}
			<InfoContainer>
				<ProfileName><Link href={href}>{profileName}</Link></ProfileName>
				<ProfileHeadline>{profileHeadline}</ProfileHeadline>
			</InfoContainer>
		</Container>
	);
}

export default AssociatedProfile;
