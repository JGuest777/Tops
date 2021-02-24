import useInstagram from '../hooks/useInstagram'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Social({ apiUrl }) {
	const gramz = useInstagram({ apiUrl })

	return (
		<div className='social'>
			<h1>follow us</h1>
			<div className='social__link'>
				<a
					href='https://www.instagram.com/tops_hair_salon/?hl=en'
					target='_blank'
				>
					<FontAwesomeIcon
						className='social__icon'
						icon={faInstagram}
						size='2x'
					/>
					<p>@tops_hair_salon</p>
				</a>
			</div>
			{/* 4 col imgs */}
			<div className='social__grid'>
				{gramz.map((gram) => (
					<a href={gram.url} target='_blank' key={gram.id}>
						<img src={gram.thumb} alt={gram.caption} loading='lazy' />
					</a>
				))}
			</div>
		</div>
	)
}
