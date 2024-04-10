import styled from 'styled-components'

const StyledImg = styled.img`
	border-radius: 100%;
	width: 2rem;
	padding: 0.5rem;
`

function NavBarProfileImage({ imgsrc }) {
  return (
		<StyledImg
			src={imgsrc}
		/>
  );
}

export default NavBarProfileImage;
