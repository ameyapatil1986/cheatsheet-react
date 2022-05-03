
async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
}

handleAdd = async () => {
    const obj = { title : 'a', body: 'b' }
    const { data: posts} = await axios.post(apiEndpoint, obj);
}

// use aync await to set filtered items ?
// https://devtrium.com/posts/async-functions-useeffect
useEffect(() => {
const fetchData = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=7`)
    const json = await response.json()
    setItems(json)
}
fetchData()
}, [])