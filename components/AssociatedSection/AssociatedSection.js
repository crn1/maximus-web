'use client';

import styled from 'styled-components'
import SimpleSection from '../SimpleSection/SimpleSection'
import AssociatedProfile from './AssociatedProfile'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	row-gap: 0.5rem;
	column-gap: 2rem;
`

const SectionName = styled.h2`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;

`

function AssociatedSection({ children, sectionName }) {
	return (
		<SimpleSection>
			<SectionName>
				{ sectionName }
			</SectionName>
			<Container>
				<AssociatedProfile profileName='John Wayne' profileHeadline='Software Developer' />
				<AssociatedProfile profileName='Mary Wayne' profileHeadline='Embedded Software Developer' />
				{ children }
			</Container>
		</SimpleSection>
	)
}

export default AssociatedSection;
