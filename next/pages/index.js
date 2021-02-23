import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tops Hair Salon | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>
				<Hero />
			</div>
		</div>
	)
}
