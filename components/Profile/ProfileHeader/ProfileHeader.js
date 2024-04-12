'use client';
import styled from 'styled-components'

import SimpleSection from '../../SimpleSection/SimpleSection'

import ProfileImage from '../ProfileImage'

import ProfileHeaderName from './ProfileHeaderName'
import ProfileHeaderHeadline from './ProfileHeaderHeadline'
import ProfileHeaderLocation from './ProfileHeaderLocation'

const Wrapper = styled.div`
	float: left;
	padding-left: 1rem;
`

const Container = styled.div`
	display: flex;
	align-items: top;
`

function ProfileHeader(props) {
  return (
		<SimpleSection>
			<Container>
				<ProfileImage imgSrc={props.imageSrc} />
				<Wrapper>
					<ProfileHeaderName>{props.name}</ProfileHeaderName>
					<ProfileHeaderHeadline>{props.headline}</ProfileHeaderHeadline>
					<ProfileHeaderLocation
						location={props.location}
						address={props.address}
						relocation={props.relocation}
					/>
				</Wrapper>
			</Container>
		</SimpleSection>
	);
}

export default ProfileHeader;
