import './_styles.scss'
import React from 'react'
import btn_icon from '../../images/demo-btn-icon.svg'

export default function features() {
  return (
    <div id='features' className='app-section'>
      <div className="app-section-wrapper">

        <div className="section-title">Features</div>

        <div className="section-caption">
          Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
        </div>

        <div className="section-content">

          <Feature
            name='search'
            color='#D7F1ED'
            title='Search Data'
            caption='Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'
          />

          <Feature
            name='access'
            color='#DDCCF5'
            title='24 Hour Access'
            caption='Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.'
          />

          <Feature
            name='print'
            color='#FCD6EC'
            title='Print Outs'
            caption='Print out service gives you convenience if someday you need print data, just edit it all and just print it.'
          />

          <Feature
            name='security'
            color='#D7ECF8'
            title='Security Code'
            caption='Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.'
          />

        </div>

      </div>
    </div>
  )
}

function Feature(props) {

  const {
    name = 'search',
    color = '#EAF5FB',
    title = 'Feature Title',
    caption = 'Lorem ipsum, dolor sit amet consectetur.'
  } = props;

  const [bg_url, update_bg] = React.useState('');

  const [ic_url, update_ic] = React.useState('');

  React.useEffect(() => {
    load_image(name, 'bg', 'svg').then(a => update_bg(a));
    load_image(name, 'ic', 'png').then(a => update_ic(a));
  }, [name]);

  const bg_image = { backgroundImage: `url(${bg_url})` };

  const bg_color = { backgroundColor: color };

  return (
    <div className='feature' style={bg_image}>

      <div className="bg-color" style={bg_color}/>

      <div className="img-wrapper">
        <img src={ic_url} alt={`${name}-feature-img`} className="feature-img" />
      </div>

      <div className="feature-content">

        <div className="title">{title}</div>

        <div className="caption">{caption}</div>

        <button className="btn feature-btn">
          <span className="btn-text">Learn More</span>
          <img src={btn_icon} alt="icon" className="btn-icon" />
        </button>

      </div>

    </div>
  )

}

const load_image = (name, type, ext) => import(`../../images/${name}-feature-${type}.${ext}`)
                                        .then(a => a.default)
                                        .catch(e => '');
