
async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
}

handleAdd = async () => {
    const obj = { title : 'a', body: 'b' }
    const { data: posts} = await axios.post(apiEndpoint, obj);
}
