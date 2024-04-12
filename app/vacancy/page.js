import Link from 'next/link'

import SimpleSection from '../../components/SimpleSection/SimpleSection'

import ProfileId from '../../components/Profile/ProfileId'
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfileContactInfo from '../../components/Profile/ProfileContactInfo/ProfileContactInfo'
import ProfileFields from '../../components/Profile/ProfileFields/ProfileFields'
import AssociatedSection from '../../components/AssociatedSection/AssociatedSection'

export default function Page() {
  return (
		<>
			<SimpleSection>
				<ProfileId entityName='Vacancy' entityId='d4f5gi3' />
			</SimpleSection>
			<ProfileHeader
				name='PHP Developer'
				size='mid'
				headline={<Link href='./company'>Starmode.io Recruiting</Link>}
			/>
			<ProfileFields />
			<AssociatedSection sectionName='Candidates' />
			<br />
		</>
	);
}
