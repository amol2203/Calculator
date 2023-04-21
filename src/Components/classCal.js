import React,{ Component } from 'react';

class Cal extends Component {
constructor(props){
super(props);
this.state = {
exprasion:""
    };
}
ButtonClick = (event) =>{
    const value = event.target.innerText;
    this.setState ({exprasion:this.state.exprasion + value}
        );
}
result = () => {
    const result = eval(this.state.exprasion);
    this.setState({exprasion:result});
}
clear = () =>{
   this.setState({
    exprasion:""
});

}
render(){
    return(
        
 <div id="container">
        <h1 id="title">Calculater</h1>    
<form id="main">
            <table>
              <tbody>
                <tr>
                    <td><div id="screen">{this.state.exprasion}</div></td>
                </tr>

                <tr>
                    <td><button type="button" className="btn" onClick={this.clear}>C</button>
                        <button type="button" className="btn"onClick={this.ButtonClick}>0</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>/</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>*</button>
                    </td>
                 </tr>   
                <tr>
                    <td><button type="button" className="btn" onClick={this.ButtonClick}>7</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>8</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>9 </button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>-</button>
                    </td>
                </tr>
                <tr>
                    <td><button type="button" className="btn" onClick={this.ButtonClick}>4</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>5</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>6</button>
                     <button type="button" className="btn" onClick={this.ButtonClick}>+</button>
                     </td>   
                </tr>
                <tr>
                    <td><button type="button" className="btn" onClick={this.ButtonClick}>1</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>2</button>
                        <button type="button" className="btn" onClick={this.ButtonClick}>3</button>
                        <button type="button" className="btn" onClick={this.result}>=</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
        </div>   
    )
}


}
export default Cal