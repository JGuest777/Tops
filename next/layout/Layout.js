import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Overlay from './Overlay'

export default function Layout({ children }) {
	const [toggleOverlay, setToggleOverlay] = useState(false)

	// Sets body overflow to hidden when overlay is present
	useEffect(() => {
		if (toggleOverlay) {
			document.querySelector('body').classList.add('no-scroll')
		} else {
			document.querySelector('body').classList.remove('no-scroll')
		}
	}, [toggleOverlay])

	return (
		<>
			<Overlay toggleOverlay={toggleOverlay} />
			<div className='content'>
				<div>{children}</div>
				<Nav
					toggleOverlay={toggleOverlay}
					setToggleOverlay={setToggleOverlay}
				/>
			</div>
			<Footer />
		</>
	)
}
