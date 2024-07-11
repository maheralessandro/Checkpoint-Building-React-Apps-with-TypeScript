import React, { Component } from 'react'; 

interface MyState {
    count : number
    title: string
}

interface MyProp {
    data : string[]
}

class Counter extends Component <MyProp> { 
state:MyState = {
 count: 0 ,
 title: ""
 }; 
 increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 

change =(e : any)=>{
    this.setState({title : e.target.value})
}

render() { 
return ( <div> 
<p>Count: {this.state.count}</p> 
<input type='text' onChange={this.change}/>
<button onClick={this.increment}>Increment</button> 
<div>
    {this.props.data.map((item : string , index : number)=>{
        return <h3 key = {index}>{item}</h3>
    })}
</div>
</div> );
 }
 } 
export default Counter;