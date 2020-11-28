import * as React from 'react';
import { filterTagProps } from './CustomTypes';

class FilterTag extends React.Component<filterTagProps, any> {
  constructor(props: filterTagProps) {
    super(props);
  }
  render() {
    return (
      <div className="filter-tag" data-tag={this.props.filterTag}>
        <span className="filter-text tag">{this.props.filterTag}</span>
        <span className="remove" onClick={() => this.props.removeFilter(this.props.filterTag)}>
          <img className="remove-icon" src="./images/icon-remove.svg" alt="remove icon in the shape of an x"></img>
        </span>
      </div>
    )
  }
}

export default FilterTag;