import Head from 'next/head'
import Layout from '../layout/Layout'
import { motion } from 'framer-motion'
import '../lib/fontAwesome'
import '../styles/style.scss'

export default function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>Tops Hair Salon | Home</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<motion.div
					key={router.route}
					initial='pageInitial'
					animate='pageAnimate'
					variants={{
						pageInitial: {
							opacity: 0
						},
						pageAnimate: {
							opacity: 1
						}
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</Layout>
		</>
	)
}
