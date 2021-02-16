import { useTransition, animated } from 'react-spring'

export default function Overlay({ toggleOverlay }) {
	const transitions = useTransition(toggleOverlay, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 175 }
	})

	return transitions.map(
		({ item, key, props }) =>
			item && (
				<>
					<animated.div key={key} style={props} className='overlay' />
				</>
			)
	)
}
