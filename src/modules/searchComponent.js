import { Component } from "react";
import React from "react";
import { Row, Col, Divider } from 'antd';
import { Input } from 'antd';
import '../assets/css/Search.css';

const { Search } = Input;

class SearchComponent extends Component{

    render(){
        const {handleSearch} = this.props;
        return(
            <div>
                <Row className='search_bar'>
                    <Col className="gutter-row" span={24}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => handleSearch(value)}
                    />
                    </Col>                    
                </Row>
            </div>
        )
    }
}

export default SearchComponent;