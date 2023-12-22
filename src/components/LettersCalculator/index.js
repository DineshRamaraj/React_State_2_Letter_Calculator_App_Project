// Write your code here.
import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {count: 0, searchInput: ''}

  onChangeStateCount = event => {
    const searchInputValue = event.target.value
    this.setState({
      count: searchInputValue.length,
      searchInput: searchInputValue,
    })
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="card-1">
            <h1 className="card-heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="card-label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="input"
              placeholder="Enter the phrase"
              className="card-input"
              onChange={this.onChangeStateCount}
              value={searchInput}
            />
            <button type="button" className="card-button">
              <p className="card-button-title">No.of letters: {count}</p>
            </button>
          </div>
          <div className="card-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MyComponent
