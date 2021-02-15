import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: '4app6lav',
	dataset: 'production',
	useCdn: true
})
