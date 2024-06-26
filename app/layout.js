import 'normalize.css'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../components/GlobalStyle.js'

import NavBar from '../components/NavBar/NavBar.js'

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<GlobalStyle />
			<body>
				<StyledComponentsRegistry>
					<NavBar />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
  )
}
