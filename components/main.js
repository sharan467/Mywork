import React from 'react';
import axios from 'axios';
import styles from './main.css';
//import {StopWatch} from './stop';
// import * as data from 'data';



export class Myapp extends React.Component{

  constructor(props) {
  super(props)
  this.state = {
    myFilm: [],
    flag: false
      }
      this.getJson = this.getJson.bind(this);
      this.loadData = this.loadData.bind(this);
  }

    loadData() {
      this.getJson();
    }
  
  getJson () {

    axios.get('./components/data.json',{
  headers: {
    'Content-Type': 'application/json'
  }
    }).then(response => { 
        //let mdata = response.data.films.film;
        //let srcdata= mdata.map(e => e.images.image[0].src);
        this.setState({myFilm: response.data, flag: true})

                   // console.log(response.data)
                   // listResults = response.data;
                   // console.log(listResults)
        
  })

  }
  
  

  

  getList() {
     const listItems = [];
     if(this.state && this.state.myFilm && this.state.myFilm.length){
        let listData = !!this.state.myFilm && this.state.myFilm;
        listData.filter((item, index) => {

            listItems.push(<tr key={index}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>


            </tr>)
        });
      }
      return listItems;
  }




 render(){ 
  return (
 <div className="navigation">
<button onClick={this.loadData}>Load data</button>
        <table>
        <tbody>
          {this.getList()}
          </tbody>
        </table>
     </div>);
    
  }

}






