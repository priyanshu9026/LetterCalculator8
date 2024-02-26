// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onClickButton = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="lists">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="letter">Enter the phrase</label>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              className="inputs"
              id="letter"
              onChange={this.onClickButton}
            />
          </div>
          <p type="button" className="btn">
            No.of letters: {searchInput.length}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="letcalimg"
        />
      </div>
    )
  }
}

export default LettersCalculator
