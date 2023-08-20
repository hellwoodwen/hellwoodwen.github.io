import Layout from "../layout/Layout"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.logoCard = React.createRef()
    this.cover = React.createRef()
  }

  setListener(domElement) {
    const minMax = 20
    return e => {
      const xAxis = (((minMax * 2) * e.pageX) / window.innerWidth) - minMax
      const yAxis = minMax - (((minMax * 2) * e.pageY) / window.innerHeight)
      if(domElement){
        domElement.style.transform = `perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    }
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.setListener(this.logoCard.current))
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.setListener(this.logoCard.current))
  }

  closeCover() {
    this.cover.current.style = `display: none`
  }

  render() {
    return <>
      <div className="cover" ref={this.cover}>
        <div className="logo-card" ref={this.logoCard}>
          <span>WenWen</span>
        </div>
        <button className="enterbutton" onClick={() => this.closeCover()}>Enter</button>
      </div>
      <Layout galleryName={"sculptureandinstallation"} />
      <style jsx>
        {` 
          .cover{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .logo-card{
            width: 100vw;
            height: 100vh;
            max-width: 750px;
            max-height: 590px;
            border-radius: 20px;
            background: url(static/css/wenwen_big_logo.png) no-repeat center center;
            transform-style: preserve-3d;
            box-shadow: 0 13px 46px -6px rgba(0,0,0,0.2);
          }

          .logo-card span{
            display: none;
          }

          .enterbutton{
            border: none;
            margin-top: 81px;
            color: #246521;
            font-size: 26px;
            background-color: transparent;
            font-family: raleway-black;
            padding: 20px;
            cursor: pointer;
          }
        `} </style>
    </>
  }
}
