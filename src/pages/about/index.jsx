import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Slider from '../../components/slider';
import EventCard from './eventCard';
import ContactItem from './contactItem';
import ContributorItem from './contributorItem';
import EcoItem from './ecoItem';
import Footer from '../../components/footer';
import communityConfig from '../../../site_config/about.jsx';
import { getLink } from '../../../utils';

import './index.scss';

class Community extends Language {

  render() {
    const language = this.getLanguage();
    const dataSource = communityConfig[language];
    return (
      <div className="community-page">
        <Header
          currentKey="community"
          type="normal"
          logo={getLink('/images/bitmoe_colorful.png')}
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img={getLink('/images/community.png')} text={dataSource.barText} />
        <section className="events-section">
          <div className="events-body">
            <h3>{dataSource.events.title}</h3>
            <Slider>
              {dataSource.events.list.map((event, i) => (
                <EventCard event={event} key={i} />
              ))}
            </Slider>
          </div>
        </section>
        <section className="eco-section">
          <h3>{dataSource.ecos.title}</h3>
          <div className="eco-lists">
          {
            dataSource.ecos.list.map((eco, i) => (
              <EcoItem eco={eco} key={i} />
            ))
          }
          </div>
        </section>
        <section className="contributor-section">
          <div className="contributor-body">
            <h3>{dataSource.contributorGuide.title}</h3>
            <p>{dataSource.contributorGuide.desc}</p>
            <div className="contributor-list">
            {
              dataSource.contributorGuide.list.map((contributor, i) => (
                <ContributorItem contributor={contributor} key={i} />
              ))
            }
            </div>
          </div>
        </section>
        <Footer logo={getLink('/images/bitmoe_logo_footer.png')} language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Community />, document.getElementById('root'));

export default Community;
