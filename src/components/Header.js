import propTypes from 'prop-types'
const Header = ({title}) => {
  return (
    <header>
      <h1 style = {{color:'red'}}>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: 'BeFriends',
}
Header.propTypes = {
    title: propTypes.string.isRequired,
}
export default Header
