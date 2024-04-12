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
				<ProfileId entityName='Company' entityId='d4f5gi3' />
			</SimpleSection>
			<ProfileHeader
				name='Starmode.io Recruiting'
				headline='Finding very niche talent in the German market'
				location='Novi Sad, Serbia'
				address='Trivijalnih Basketaša 89, 21000 Novi Sad'
			/>
			<ProfileContactInfo />
			<AssociatedSection sectionName='People' />
		</>
	);
}
