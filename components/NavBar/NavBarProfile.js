import styled from 'styled-components'
import ProfileImage from '../Profile/ProfileImage'

const Wrapper = styled.div`
	float: left;
`

function NavBarProfile({ imgsrc }) {
  return (
		<Wrapper>
			<ProfileImage imgsrc={imgsrc} />
		</Wrapper>
  );
}

export default NavBarProfile;
