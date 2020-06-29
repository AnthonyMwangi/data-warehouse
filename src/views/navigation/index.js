import './_styles.scss'
import React from 'react'
import logo from '../../images/logo.svg'
import btn_icon from '../../images/demo-btn-icon.svg'

import {

  AiOutlineMenu as MenuOpen,

  AiOutlineClose as MenuClose

} from 'react-icons/ai'

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show_menu: false,
      inview: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll_handler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll_handler);
  }

  scroll_handler = () => {

    const { clientHeight, clientWidth } = document.documentElement;

    const { top, left, right, bottom } = document.getElementById('navbar').getBoundingClientRect();

    const inview = ( top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth);

    if (inview !== this.state.inview) this.setState({ inview });

  }

  action = () => this.setState({ show_menu: !this.state.show_menu });

  render() {

    const { show_menu, inview } = this.state;

    const MenuIcon = !show_menu ? MenuOpen : MenuClose;

    const visibility = !!show_menu ? 'menu-visible' : 'menu-hidden';

    const view_mode = (!inview || !!show_menu) ? 'show-bg' : 'hide-bg';

    return (
      <div id='navbar' className='app-navigation'>

        <div className={`app-navigation-wrapper ${view_mode}`}>

          <img src={logo} alt="app-logo" className="logo" />

          <div className={`nav-wrapper ${visibility}`}>

            <div className="nav">
              <a onClick={this.action} href='#about' className="nav-item active">About</a>
              <a onClick={this.action} href='#features' className="nav-item">Features</a>
              <a onClick={this.action} href='#testimonials' className="nav-item">Reviews</a>
              <a onClick={this.action} href='#signup' className="nav-item">Signup</a>
            </div>

            <button className="btn demo-btn">
              <span className="btn-text">Request Demo</span>
              <img src={btn_icon} alt="icon" className="btn-icon" />
            </button>

          </div>

          <div className={`menu-button ${visibility}`} onClick={this.action}>
            <MenuIcon className='icon' />
          </div>

        </div>

      </div>
    )
  }
}
