import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutRequest } from '../actions/auth';


class Header extends Component {
  componentWillMount() {
    this.state = {
      account: {
        menuActive: false
      }
    }
  }

  constructor(props) {
    super(props);
  }

  onAccountClick() {
    var activeFlag = this.state.account.menuActive;

    this.setState({
      account: {
        menuActive: !activeFlag
        }
      });
  }

  closeAccountDropdown() {
    this.setState({
      account: {
        menuActive: false
      }
    });
  }

  onLogoutClick() {
    this.props.logoutRequest();
  }

  render() {
    return (
      <nav>
        <div className='container'>
          <div
            className='mobile-quick-nav mobile-nav-left'
            onClick={ this.context.router.goBack }
            title='Go back'>
            <div className='mobile-chevron chevron-left'></div>
          </div>

          <div className='portal'>
            <Link to='/' title='Gourmand'>FoodiePal</Link>
          </div>
          
          <div className='mobile-quick-nav mobile-nav-right' onClick={ this.onAccountClick.bind(this) }>
            <ul className='mobile-account-nav'>
              <li>Account &#x25BE;
                <ul className={ `mobile-account-subnav ${ this.state.account.menuActive ? 'active' : '' }` }>
                  <li onClick={ this.onLogoutClick.bind(this) }>Logout</li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className='main-nav'></ul>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutRequest }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);

Header.contextTypes = {
  router: React.PropTypes.object
}