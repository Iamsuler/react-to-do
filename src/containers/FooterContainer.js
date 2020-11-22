import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/action'
import Footer from '../components/Footer'
import { getFilter } from '../selectors/index'

const mapStateToProps = state => ({
  filter: getFilter(state)
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
