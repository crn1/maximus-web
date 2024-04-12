import styled from 'styled-components'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Wrapper = styled.p`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	float: left;
	padding-right: 1.5rem;
`

const IndustryIcon = styled.i`
	color: black;
	font-size: 1rem;
`

function ProfileHeaderIndustry({ industryTag, industryName }) {
  return (
		<Wrapper>
			<IndustryIcon className='bi bi-truck'/>
			{ industryName }
		</Wrapper>
  );
}

export default ProfileHeaderIndustry;
