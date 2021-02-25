import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: 7,
		right: 7,
		zIndex: 1000
	}
}))

export default function ScrollTop(props) {
	const { children } = props
	const classes = useStyles()
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100
	})

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'.hero'
		)

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role='presentation' className={classes.root}>
				{children}
			</div>
		</Zoom>
	)
}
