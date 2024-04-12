import styled from 'styled-components'

const Wrapper = styled.p`
	margin-top: 0;
	margin-bottom: 0;
`

const StyledSpan = styled.p`
	border: 1px solid gray;
	border-radius: 5px;
	padding: 0.25rem;
	color: green;
	font-size: smaller;
	margin-bottom: 0;
	margin-top: 0.2rem;
`

function ProfileHeaderLocation({ address, location, relocation }) {
  return (
		<Wrapper>
			{ address }
			<br />
			{ location }
			{ relocation &&
				<StyledSpan>
					Willing to relocate to: { relocation }
				</StyledSpan>
			}
		</Wrapper>
  );
}

export default ProfileHeaderLocation;
