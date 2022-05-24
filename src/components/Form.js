import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         question:"",
         typeOfQuestion:'singlevalued',
         numberOfQuestions:'1'
      }
    }
    handleUserNameChange = (event)=>{
     this.setState(
         {
             question:event.target.value
         }
     )
    }
    handleTypeOfQuestion = (event)=>{
        this.setState(
            {
                typeOfQuestion:event.target.value
            }
        )
       }
       handleNumberOfQuestions = (event)=>{
        this.setState(
            {
                numberOfQuestions:event.target.value
            }
        )
       }
       handleSubmit= event =>{
           alert(`${this.state.question}${this.state.typeOfQuestion}${this.state.numberOfQuestions}`)
           event.preventDefault()
       }
    
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <div>
             <label>Please enter the question:</label>
             <input type='text' value={this.state.question}onChange={this.handleUserNameChange}/>
        </div>
        <div>
            <label>Type Of Answer:</label>
            <select value={this.state.typeOfQuestion}onChange={this.handleTypeOfQuestion}>
                <option value="Single Valued Answer">Single Valued Answer</option>
                <option value="Multi Valued Answer">Multi Valued Answer</option>
            </select>
        </div>
        <div>
            <label>Number Of Questions:</label>
            <select value={this.state.numberOfQuestions}onChange={this.handleNumberOfQuestions}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <button>Create Quiz</button>
    </form>
    )
  }
}
export default Form