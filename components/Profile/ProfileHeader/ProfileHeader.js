'use client';
import styled from 'styled-components'

import SimpleSection from '../../SimpleSection/SimpleSection'

import ProfileImage from '../ProfileImage'
import ProfileHeaderName from './ProfileHeaderName'
import ProfileHeaderHeadline from './ProfileHeaderHeadline'
import ProfileHeaderLocation from './ProfileHeaderLocation'
import ProfileHeaderIndustry from './ProfileHeaderIndustry'

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
				<ProfileImage size={props.size} imgSrc={props.imageSrc} />
				<Wrapper>
					<ProfileHeaderName>{props.name}</ProfileHeaderName>
					<ProfileHeaderHeadline>{props.headline}</ProfileHeaderHeadline>
					<ProfileHeaderLocation
						location={props.location}
						address={props.address}
						relocation={props.relocation}
					/>
					{ props.industryTag ? <ProfileHeaderIndustry
						industryTag={props.industryTag}
						industryName={props.industryName}
					/> : null}
				</Wrapper>
			</Container>
		</SimpleSection>
	);
}

export default ProfileHeader;
