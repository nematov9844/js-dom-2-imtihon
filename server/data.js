const baseUrl = "https://fakestoreapi.com"

export async function getData(path) {
    const data = await fetch(`${baseUrl}/${path}`).then(res => res.json())
    return data
}