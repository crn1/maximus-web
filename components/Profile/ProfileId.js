'use client';

import styled from 'styled-components'

const StyledSpan = styled.span`
	float: left;
	color: gray;
	margin-top: 0;
	margin-bottom: 0;
	display: contents;
`

function ProfileId({entityName, entityId}) {
  return (
		<StyledSpan>{entityName} ID: {entityId}</StyledSpan>
	);
}

export default ProfileId;
