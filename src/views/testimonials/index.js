import './_styles.scss'
import React from 'react'
import Flickity from 'flickity'
import random_avatar from '../../images/random-user.jpg';

export default class Testimonials extends React.Component {

  constructor(props) {
    super(props);
    this.options = {
      draggable: true,
      autoPlay: true,
      freeScroll: true,
      prevNextButtons: true,
      pageDots: true,
      contain: true
    };
    this.flickity = null;
    this.state = { data: [] }
    this.grid = document.getElementById('feedback-grid');
  }

  componentDidMount = () => {

    this.setState({ data: this.dataset() });

    return this.position_grid_items();

  }

  position_grid_items = async () => {

    await this.load_grid();

    if (!!this.flickity) this.flickity.destroy();

    this.flickity = new Flickity(this.grid,this.options);

    return this.grid.style.setProperty('overflow-x','hidden');

  }

  load_grid = async () => {

    this.grid = document.getElementById('feedback-grid');

    return await this.grid.childNodes; //Ensure all grid-items have rendered.

  }

  dataset = () => ([
    {
      comment: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'
    },
    {
      comment: 'Perferendis sit a quis consectetur est magnam eaque. Vero dolorem natus quos nam ab beatae amet, enim accusantium sapiente facilis nulla tenetur.'
    },
    {
      comment: 'Eligendi exercitationem placeat quia. Voluptatibus amet quibusdam dignissimos. Placeat cupiditate quos nam dolor aspernatur incidunt consequr ipsam.'
    },
    {
      comment: 'Laudantium vero enim praesentium ad dolorum facilis obcaecati possimus doloribus quasi recusandae, illum accusantium quos eius temporibus corporis explicabo incidunt.'
    }
  ])

  render() {

    return (
      <div id='testimonials' className='app-section noselect'>

        <div className="section-wrapper">

          <div className="section-title">Testimonials</div>

          <div id="feedback-grid">
            { this.state.data.map((a,i) => <Testimonial key={i} data={a}/>)}
            <div className='testimonial spacer'/>
          </div>

        </div>

      </div>
    )
  }

}

function Testimonial({ data }) {

  const { comment } = data;

  const [user_link,update_link] = React.useState('random@user.com');

  const [user_name,update_name] = React.useState('Random User');

  const [avatar,update_avatar] = React.useState(random_avatar);

  React.useEffect(() => {

    async function fetch_api_data () {

      const url = `https://randomuser.me/api/?inc=picture,name,email&noinfo&results=${1}`;

      const response = await fetch(url).then(a => a.json()).catch(() => ({results: []}));

      const { name, email, picture } = response?.results[0] ?? {};

      if (!!name) update_name(`${name.title} ${name.first} ${name.last}`);

      if (!!picture) update_avatar(picture.medium);

      if (!!email) update_link(email);

    }

    fetch_api_data();

  }, [data]);

  return (
    <div className='testimonial'>

      <img src={avatar} alt="user-avatar" className="avatar"/>

      <div className="content">
        <div className="name">{user_name}</div>
        <div className="link">{user_link}</div>
        <div className="comment">{comment}</div>
      </div>

    </div>
  )
}
