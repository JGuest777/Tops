import Head from 'next/head'
import Social from '../components/Social'
import Hero from '../components/Hero'
import absoluteUrl from 'next-absolute-url'

export default function Home({ apiUrl }) {
	return (
		<div>
			<Head>
				<title>Tops Hair Salon | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>
				<Hero />
				<Social apiUrl={apiUrl} />
			</div>
		</div>
	)
}

export async function getServerSideProps({ req }) {
	const { protocol, host } = absoluteUrl(req)
	const apiUrl = `${protocol}//${host}`
	return {
		props: {
			apiUrl
		}
	}
}
