import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tops Hair Salon | Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div style={{ paddingTop: '3rem', textAlign: 'center' }}>
				<h1>Home</h1>
			</div>
		</div>
	)
}
