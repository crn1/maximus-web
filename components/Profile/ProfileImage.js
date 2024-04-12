import styled from 'styled-components'

const StyledImg = styled.img`
	${({ size }) => size == 'big' ?
		'height: 9rem; width: 9rem;' : size == 'small' ?
		'height: 2rem; width: 2rem;' : size == 'tiny' ?
		'height: 1.5rem; width: 1.5rem;' :
		'height: 2rem; width: 2rem;'
	}
	${({ bordered }) => bordered && `
		border: 1px solid gray;
  `}
	${({ circled }) => circled && `
		border-radius: 100%;
  `}
	object-fit: cover;
	object-position: center center;
	float: left;
`

function ProfileImage({ imgSrc, bordered=true, circled=false, size='big' }) {
  return (
		<StyledImg
			src={imgSrc || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}
			bordered={bordered}
			circled={circled}
			size={size}
		/>
  );
}

export default ProfileImage;
