'use client';

import styled from 'styled-components'
import SimpleSection from '../SimpleSection/SimpleSection'
import AssociatedProfile from './AssociatedProfile'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 0.5rem;
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
				<AssociatedProfile profileName='John Wayne' profileHeadline='Software Developer' href='./candidate'/>
				<AssociatedProfile profileName='Mary Wayne' profileHeadline='Embedded Software Developer' href='./candidate'/>
				<AssociatedProfile iconClass='bi bi-filetype-php' profileName='PHP Developer' profileHeadline='Belgrade, Hybrid, 120k RSD/month' href='./vacancy' />
				<AssociatedProfile iconClass='bi bi-filetype-js' profileName='JavaScript Developer' profileHeadline='Belgrade, Hybrid, 140k RSD/month' href='./vacancy'/>
				{ children }
			</Container>
		</SimpleSection>
	)
}

export default AssociatedSection;
