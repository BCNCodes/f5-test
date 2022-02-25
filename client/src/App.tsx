import React from 'react';
import './App.css';
import serviceImage from './services/images';
import "antd/dist/antd.css";
import { Button,Card } from 'antd';

export default function App() {
  const [images, setImages] = React.useState<Image[]>([]);
  const server = 'http://localhost:3456/';
  const { Meta } = Card;
  const hook = () => {
    (async ()=>{try {
      // const response = await axios.get(`${server}api/image`);
      // setImages(response.data);
      const images = await serviceImage.getAll();
      setImages(images);
    } catch (error) {
      console.log(error);
    }})()
  }

  React.useEffect(hook, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          mis imágenes favoritas
        </p>
      </header>
      <div className="App-body">
        <ul>
          {images.map(image => <li key={image.id}>
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img src={`${server}/images/${image.filename}`} alt={image.name}/>}
>
            <Meta title={image.name}/>
            <Button type="primary" danger>Eliminar</Button>
            <Button type="primary">Editar</Button>
            </Card>
            </li>)}
        </ul>
      </div>
    </div>
  );
};
