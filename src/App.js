import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import './App.css';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Winston",
    kerjaan : "Programmer(Amin)"
  },
  {
    nama : "Siapa",
    kerjaan : "Gabut gan"
  }
]

function App() {
  
 

  return (
    

    <div className="App">
      {
        cardData.map( data =>
          <Card size="small" title={data.nama} style={{ width: 300 }}>
            <p>{data.kerjaan}</p>
          </Card>
      )
    }
    </div>
  );
}

export default App;
