import React,{Component} from 'react';
import SearchComponent from '../modules/searchComponent';
import FoodComponent from '../modules/FoodComponent';
import Item from 'antd/lib/list/Item';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Router from '../common/router/router'

class Home extends Component{
    constructor() {
        super();
      }
    state ={
        foodData: [],
    }

    handleSearch = (searchWord)=>{
        console.log(searchWord);
     
        fetch('https://api.nal.usda.gov/fdc/v1/search?api_key=Bfcl4un0RfbButVtax6vjpOvlB8g0Nybdr4hEmCA&generalSearchInput=' + searchWord)
        .then(results =>{
            return results.json();
        }).then(data=> {
            this.setState({
                foodData:data.foods
            })
        })
    }

    render(){

        const foodItems = this.state.foodData.map(({i})=>({
            id : i.fdcId,
            title : i.description,
            brand : i.brandOwner,
            ingridients : i.ingridients,
        })) 
        return(
            <div>
                <SearchComponent handleSearch = {this.handleSearch} />
                <br/>
                <Button type="dashed"><Link to="/secondRoute">Pagetwo</Link></Button>
                {/* foodItems.map((item, key)=>(
                    <FoodComponent title = {Item.title} brand = {item.brand} ingridients = {item.ingridients}/>
                )) */}
                <Router/>
            </div>
        );
    }
}

export default Home;