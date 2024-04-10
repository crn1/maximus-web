import 'normalize.css'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../components/GlobalStyle.js'

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<GlobalStyle />
			<body>
				<StyledComponentsRegistry>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
  )
}
