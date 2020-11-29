import * as React from 'react';
import { listingType } from './CustomTypes';

interface ListingRowProps {
  addFilter: Function;
  rowData: listingType;
}

class ListingRow extends React.Component<ListingRowProps, any> {
  constructor(props: ListingRowProps) {
    super(props);
  }
  render() {
    const $: listingType = this.props.rowData;
    return (
      <div className={$.featured ? 'listing-row featured-row': 'listing-row'}>
        <div className="profile-section">
          <img className="company-logo" src={$.logo} alt="company logo" />
          <div className="profile-data">
            <div className="profile-top-bar">
              <span className="profile-company">{$.company}</span>
              {$.new ? <div className="profile-new highlight-bar"><span className="highlight-text">NEW!</span></div> : null}
              {$.featured ? <div className="profile-featured highlight-bar"><span className="highlight-text">FEATURED</span></div> : null}
            </div>
            <div className="profile-position">
              <span className="position-text">{$.position}</span>
            </div>
            <div className="profile-bottom-bar">
              <span className="profile-posted-at">{$.postedAt}</span>
              <span className="profile-separator">{String.fromCodePoint(0x2022)}</span>
              <span className="profile-contract">{$.contract}</span>
              <span className="profile-separator">{String.fromCodePoint(0x2022)}</span>
              <span className="profile-location">{$.location.split(' ').length == 2 ? 
               $.location.split(' ')[0] + ' ' + $.location.split(' ')[1].toLowerCase() : $.location}</span>
            </div>
          </div>
        </div>
        <div id="profile-mobile-divider"></div>
        <div className="keywords" id={'keyword-' + $.id}>
          <span className="keyword-text keyword tag" data-role={$.role} onClick={() => this.props.addFilter($.role)}>
            {$.role}
          </span>
          <div className="keyword tag" onClick={() => this.props.addFilter($.level)}>
            <span className="keyword-text" data-level={$.level}>{$.level}</span>
          </div>
          {
            $.languages.map((lang): JSX.Element => {
              return (
                <div className="keyword tag" key={$.id + lang} onClick={() => this.props.addFilter(lang)}>
                  <span className="keyword-text" data-lang={lang}>{lang}</span>
                </div>
              );
            })
          }
          {
            $.tools.map((tool): JSX.Element => {
              return (
                <div className="keyword tag" key={$.id + tool} onClick={() => this.props.addFilter(tool)}>
                  <span className="keyword-text" data-tool={tool}>{tool}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ListingRow;