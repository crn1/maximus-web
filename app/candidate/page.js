import Link from 'next/link'

import SimpleSection from '../../components/SimpleSection/SimpleSection'

import ProfileId from '../../components/Profile/ProfileId'
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader'
import ProfileContactInfo from '../../components/Profile/ProfileContactInfo/ProfileContactInfo'
import ProfileFields from '../../components/Profile/ProfileFields/ProfileFields'

export default function Page() {
  return (
		<>
			<SimpleSection>
				<ProfileId entityName='Candidate' entityId='d4f5gi3' />
			</SimpleSection>
			<ProfileHeader
				name='William Johnson'
				headline='Software Developer and Product Manager'
				location='New York, United States'
				address='21st Jump Street, 22000 New York'
				relocation='San Francisco (USA), Munich (Germany)'
			/>
			<ProfileContactInfo />
			<ProfileFields />
		</>
	);
}
