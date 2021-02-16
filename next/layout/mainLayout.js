import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Overlay from './Overlay'

export default function mainLayout({ children }) {
	const [toggleOverlay, setToggleOverlay] = useState(false)

	// Sets body overflox to hidden when overlay is present
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
				<Header
					toggleOverlay={toggleOverlay}
					setToggleOverlay={setToggleOverlay}
				/>
				<div>{children}</div>
			</div>
			<Footer />
		</>
	)
}
