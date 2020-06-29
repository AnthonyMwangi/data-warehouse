import './_styles.scss'
import React from 'react'
import logo from '../../images/logo-mark.svg'
import arrow from '../../images/demo-btn-icon.svg'
import * as iconset from 'react-icons/fa'
import { BsFillChatDotsFill } from 'react-icons/bs'

export default function footer() {
  return (
    <div id='footer' className='app-section'>
      <div className="app-section-wrapper">

        <DemoFooter />

        <div className='main-footer'>

          <BrandInformation />

          <NavigationLinks
            title='About'
            items={['Profile', 'Features', 'Careers', 'DW News']}
          />

          <NavigationLinks
            title='Help'
            items={['Support', 'Sign Up', 'Guide', 'Reports', 'Q&A']}
          />

          <SocialLinks
            title='Social Media'
            facebook=''
            twitter=''
            instagram=''
            linkedin=''
          />

          <div className="footer-section legal-section">

            <div className="content">
              <div className="copyright">© Datawarehouse™, 2020. All rights reserved.</div>
              <div className="copyright">Company Registration Number: 21479524.</div>
            </div>

            <button className="chat-bubble">
              <BsFillChatDotsFill className='icon' />
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

function DemoFooter() {
  return (
    <div className="demo-section">

      <div className="text-wrapper">
        <div className="title">Try for free!</div>
        <div className="caption">Get limited 1 week free try our features!</div>
      </div>

      <div className="btn-wrapper">

        <button className="btn btn-more">
          Learn More
        </button>

        <button className="btn btn-demo">
          <span className="btn-text">Request Demo</span>
          <img src={arrow} alt="btn-icon" className="btn-icon" />
        </button>

      </div>

    </div>
  )
}

function BrandInformation() {
  return (
    <div className="footer-section brand-info">

      <img src={logo} alt="DataWarehouse" className="logo-mark" />

      <div className="address">
        Warehouse Society, 234 Bahagia Ave Street PRBW 29281
      </div>

      <div className="contacts">

        <a href="mailto:info@warehouse.project?subject=FEEDBACK" className="email">
          info@warehouse.project
        </a>

        <a href="tel:1-232-3434" className="phone-no">
          1-232-3434 (Main)
        </a>

      </div>

    </div>
  )
}

function NavigationLinks({ title = 'Nav List', items = [] }) {
  return (
    <div className="footer-section nav-links">

      <div className="nav-list-title">{title}</div>

      {
        items.map((a, i) => <a href={`#${a}`} key={i} className='nav-list-link'>{a}</a>)
      }

    </div>
  )
}


function SocialLinks(props) {

  const {
    title = 'Social Media',
    facebook = 'facebook.com',
    twitter = 'twitter.com',
    instagram = 'instagram.com',
    linkedin = 'linked.in'
  } = props;

  const site_icons = (a) => iconset[`Fa${a}`];

  const site_urls = [facebook, twitter, instagram, linkedin];

  const site_names = ['Facebook', 'Twitter', 'Instagram', 'Linkedin'];

  const urls = site_urls.map((a, i) => ({ url: a, Icon: site_icons(site_names[i]) }));

  return (
    <div className="footer-section nav-links">

      <div className="nav-list-title">{title}</div>

      <div className="nav-social-links">
        {
          urls.map(({ url, Icon }, i) =>
            <a
              key={i}
              target='_blank'
              href={`${url}`}
              title={site_names[i]}
              className='social-link'
              rel='noopener noreferrer'
            >
              <Icon className='social-icon' />
            </a>
          )
        }
      </div>

    </div>
  )
}
