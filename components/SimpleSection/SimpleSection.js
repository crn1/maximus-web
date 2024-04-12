'use client';

import styled from 'styled-components'

const StyledSection = styled.section`
	border-top: 1px solid gray;
	width: 100%;
	padding: 0;

	${({ enableBottomBorder }) => enableBottomBorder && `
		border-bottom: 1px solid gray;
  `}
`

const Container = styled.div`
	padding: 0.5rem;
`

function SimpleSection({children, enableBottomBorder=false}) {
  return (
		<StyledSection enableBottomBorder={enableBottomBorder}>
			<Container>
				{ children }
			</Container>
		</StyledSection>
	);
}

export default SimpleSection;
