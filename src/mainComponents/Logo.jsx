import logo from '../assets/logo.png'

function Logo({height = "60px", width = '150px'}) {
  return (
    <div>
    <img height={height} width={width} src={logo} alt="" />
    </div>
  )
}

export default Logo