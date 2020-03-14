import React from 'react';
import './App.css';
import { Button } from 'antd';


function Testing(){
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
        </div>
    );
} 

export default Testing;