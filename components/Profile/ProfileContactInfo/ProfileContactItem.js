'use client';
import styled from 'styled-components'
import 'bootstrap-icons/font/bootstrap-icons.css';

import SimpleSection from '../../SimpleSection/SimpleSection'
import CandiateContactItem from './ProfileContactItem'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	float: left;
	padding-right: 1.5rem;
`

const ProfileContactItemIcon = styled.i`
	color: black;
	font-size: 1rem;
`

function ProfileContactItem({ contact, iconClass }) {
  return (
		<Wrapper>
			<ProfileContactItemIcon className={iconClass} />
			{ contact }
		</Wrapper>
	);
}

export default ProfileContactItem;
