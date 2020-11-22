import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/action'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
  filter: state.filter
})

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => {
    dispatch(setVisibilityFilter(filter))
  }
})

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
