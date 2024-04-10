import 'normalize.css'
import StyledComponentsRegistry from '../lib/registry'

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
  )
}
