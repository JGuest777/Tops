import { useState, useEffect } from 'react'

export default function useInstagram({ apiUrl }) {
	const url = `${apiUrl}/api/getposts`
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data)
			})
	}, [])
	return posts
}
