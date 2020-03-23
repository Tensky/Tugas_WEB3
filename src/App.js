import React, { Component } from 'react';
import { Card } from 'antd';
import './App.css';

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

class App extends Component {
  constructor() {
    super();
  }

  render()  {
    return (
      <div className="App">{
          cardData.map( data =>
            <Card size="small" title={data.nama} style={{ width: 300 }}>
              <p>{data.kerjaan}</p>
            </Card>
          )
      }
      </div>
    ); 
  }
}



export default App;
