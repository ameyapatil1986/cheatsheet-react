import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ArtItem from './components/art'

function App() {

  const [items, setItems] = React.useState<any>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [totalSelected, setTotalSelected] = React.useState<any>([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=1&limit=10`)
            .then(response => response.json())
            .then(json => setItems(json))
  }, [])

  return (
   <div>

     {/* if stmt. */}
     <div>
        {items && "hello world"}
     </div>
     <div>
        {items && `hello world`}
     </div>
     <div>
        {items && `backtick inside a jsx ${items.length}`}
     </div>
     <div>
       {/* using a "string variable" to pass string to a JSX prop*/}
        {/* type propAlias = { url: string };
        const ArtItem = ({ url }: propAlias) => <img src={url} height="100" width="200"></img>;
        export default ArtItem; */}
        {items.length > 0 && <ArtItem url={items[0].download_url}/>}
     </div>

    {/* if else  */}
     <div>
        {items.length > 0 ? items[0].url : "empty yet"}
     </div>
     <div>
        {items.length > 0 ? <img src={items[0].download_url} height="100" width="200"></img> : "no img yet"}
     </div>
   </div>
  );
}

export default App;
