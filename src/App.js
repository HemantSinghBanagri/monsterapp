import {Component} from 'react';
import CardList from './component/card-list/card-list.component';
import './App.css';





class App extends Component{
  constructor(){
    super();
    this.state={
      monster:[
       {
          name:'linda',
          id:1
        },
        {
          name:'jacky',
          id:2
        },
        {
          name:'andrey',
          id:3
        }
        ,{
          name:'franky',
          id:4
        },{
          name:'lilly',
          id:5
        }
      ],
      searchname:''

    }
    
  }
 // fetching the api
    /*componentDidMount(){
      fetch("")
      .then(res=>{
        res.json()
      })
      .then(user=>{
        this.setState(()=>{
          return {monster:user}
        })
      })
      .then(e=>{
        console.log("error")
      })
    }*/


    onsearchCahange=(event)=>{
      console.log(event.target.value)
      const searchname=event.target.value.toLocaleLowerCase();
     

      this.setState(()=>{
       return {searchname}
      })
}
  render() {
    

    const filtername=this.state.monster.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchname)

     })
    return (
      <div className="App">
        {/*filtername.map((monster)=>{
          return <div key={monster.id}><h1>{monster.name}</h1>
          </div>
        })*/}
        
        
        

        <h1>{this.state.monster.name}</h1>
        <button onClick={()=>{
          this.setState(()=>{
            return {monster:[{name:'hemant'}]}
          })
        }}> change</button>
        <CardList monster={filtername}/> 
      </div>



        

    );
  }
  
}


export default App;
