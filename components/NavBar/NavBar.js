'use client';

import styled from 'styled-components'

import NavBarMenuItem from './NavBarMenuItem'
import ProfileImage from '../Profile/ProfileImage'

const StyledNavbar = styled.div`
	text-align: center;
	display: flow-root;
`

const ProfileImageContainer = styled.div`
	padding-top: 0.5rem;
	padding-left: 0.5rem;
	padding-bottom: 0.5rem;
	float: left;
`

function NavBar() {
  return (
		<StyledNavbar>
			<ProfileImageContainer>
				<ProfileImage
					size='small'
					circled
					imgSrc='https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				/>
			</ProfileImageContainer>

			<NavBarMenuItem name='Candidates' link='/candidates' />
			<NavBarMenuItem name='Vacancies' link='/vacancies' />
		</StyledNavbar>
  );
}

export default NavBar;
