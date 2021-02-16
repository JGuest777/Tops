import { createRef, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

export default function Menu({
	links,
	toggleMenu,
	setToggleMenu,
	setToggleOverlay
}) {
	let linkRefs = useRef([])

	// creates refs foreach menu link
	linkRefs.current = [0, 0, 0, 0].map(
		(ref, index) => (linkRefs.current[index] = createRef())
	)

	useEffect(() => {
		if (!toggleMenu) return
		function handleCLick(e) {
			for (let i = 0; i < linkRefs.current.length; i++) {
				const elRef = linkRefs.current[i]

				if (elRef && !elRef.current.contains(e.target)) {
					setToggleMenu(false)
					setToggleOverlay(false)
				}
			}
		}

		window.addEventListener('click', handleCLick)
		return () => window.removeEventListener('click', handleCLick)
	}, [toggleMenu])

	return (
		<div>
			{links.map((link, i) => (
				<Link href={`/${link.slug}`} key={uuidv4()}>
					<a ref={linkRefs.current[i]}>{link.name}</a>
				</Link>
			))}
		</div>
	)
}
