'use client';

import styled from 'styled-components'

import NavBarMenuItem from './NavBarMenuItem'
import NavBarProfile from './NavBarProfile'

const StyledNavbar = styled.div`
	text-align: center;
	display: flow-root;
`

function NavBar() {
  return (
		<StyledNavbar>
			<NavBarProfile imgsrc='https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
			<NavBarMenuItem name='Candidates' link='/candidates' />
			<NavBarMenuItem name='Vacancies' link='/vacancies' />
		</StyledNavbar>
  );
}

export default NavBar;
