'use client';
import styled from 'styled-components'

const Wrapper = styled.div`
	flex-direction: row;
	width: calc(100%/3 - 3*0.5rem);
	display: flex;
`

const FieldWrapper = styled.div`
	flex-direction: row;
	flex: 1;
	align-items: center;
`

const FieldName = styled.span`
	font-weight: bold;
`

function ProfileFieldsItem({fieldName, fieldValue}) {
  return (
		<Wrapper>
			<FieldWrapper>
				<FieldName>
					{ fieldName }
				</FieldName>
			</FieldWrapper>
			<FieldWrapper>{fieldValue}</FieldWrapper>
		</Wrapper>
	);
}

export default ProfileFieldsItem;
