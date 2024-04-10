import styled from 'styled-components'

const StyledLink = styled.a`
	text-decoration: none;
	float: right;
	padding: 1rem;
	color: black;

	&:hover {
		background-color: black;
		color: white;
	}
`

function NavBarMenuItem({ name, link }) {
	return (
		<StyledLink href={link}>
			{name}
		</StyledLink>
	);
}

export default NavBarMenuItem;
