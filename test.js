const fetchUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('user'), 10000)
	})
}

const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('data'), 10000)
	})
}

const main = async () => {
	const [user, data] = await Promise.all([fetchUser(), fetchData()])
	console.log(user, data)
}

main()
