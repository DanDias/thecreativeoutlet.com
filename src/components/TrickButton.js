const TrickTypes = { SwapText: Symbol("SwapText") }

const TrickButton = ({text, altText, type=TrickTypes.SwapText}) => {
  const mouseOver = ({target}) => {
    switch(type) {
      case TrickTypes.SwapText: 
        target.innerText = altText;
        break;
      default:
        break;
    }
  }

  const mouseOut = ({target}) => {
    switch(type) {
      case TrickTypes.SwapText: 
        target.innerText = text;
        break;
      default:
        break;
    }
  }

  switch (type) {
    case TrickTypes.SwapText:
      return (<button className='banner-button' onMouseDown={mouseOver} onMouseOver={mouseOver} onMouseUp={mouseOut} onMouseOut={mouseOut}>Buy now</button>)
    default:
      return null
  }
}

export default TrickButton;
export { TrickTypes, TrickButton }