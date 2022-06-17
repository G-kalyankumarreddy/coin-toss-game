import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {image: 0, heads: 0, tails: 0}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({image: tossResult})
    if (tossResult === 1) {
      this.setState(prevCount => ({
        tails: prevCount.tails + 1,
      }))
    } else {
      this.setState(prevCount => ({heads: prevCount.heads + 1}))
    }
  }

  tossedImage = () => {
    const {image} = this.state

    if (image === 1) {
      return 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
  }

  render() {
    const {image, heads, tails} = this.state
    console.log(image)
    const result =
      image === 1
        ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="title">Coin Toss Game </h1>
          <p className="heads-or-tails"> Heads (or) Tails</p>
          <img src={result} alt="toss result" className="coin-image" />
          <button
            type="button"
            onClick={this.onClickTossButton}
            className="toss-btn"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {heads + tails}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
