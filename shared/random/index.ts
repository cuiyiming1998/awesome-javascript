export const getRandomString = () => {
	return Math.random().toString(36).substring(3, 6) + new Date().valueOf()
}
