import styled from 'styled-components'
import NavBarProfileImage from './NavBarProfileImage.js'

const Wrapper = styled.div`
	float: left;
`

function NavBarProfile({ imgsrc }) {
  return (
		<Wrapper>
			<NavBarProfileImage imgsrc={imgsrc} />
		</Wrapper>
  );
}

export default NavBarProfile;
