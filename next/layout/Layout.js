import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Overlay from './Overlay'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ScrollTop from '../utils/ScrollTop'

export default function Layout({ children }, props) {
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
			<ScrollTop {...props}>
				<Fab color='default' size='small' aria-label='scroll back to top'>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</>
	)
}
