const url = 'https://private-anon-6f1cc07d62-lampshop.apiary-mock.com/lamps'

export async function getLampData() {
    try {
        let response = await fetch(url)
        return await response.json()
    } catch(err) {
        console.error(err)
    } finally {
        console.log('finally')
    }
}