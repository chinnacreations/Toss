import {Component} from 'react'

import './index.css'

const HeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: HeadImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let TossImage = ''
    let latestheadsCount = headsCount
    let latesttailsCount = tailsCount

    if (toss === 0) {
      TossImage = HeadImage
      latestheadsCount += 1
    } else {
      TossImage = TailImage
      latesttailsCount += 1
    }

    this.setState({
      tossImage: TossImage,
      headsCount: latestheadsCount,
      tailsCount: latesttailsCount,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img className="coin-img" src={tossImage} alt="toss result" />
          <button className="btn" type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="result-con">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
