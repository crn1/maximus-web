'use client';
import styled from 'styled-components'

import SimpleSection from '../../SimpleSection/SimpleSection'
import CandiateContactItem from './ProfileContactItem'
import 'bootstrap-icons/font/bootstrap-icons.css';

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

function ProfileContactItem({ contact }) {
  return (
		<Wrapper>
			<ProfileContactItemIcon className='bi bi-linkedin' />
			{ contact }
		</Wrapper>
	);
}

export default ProfileContactItem;
