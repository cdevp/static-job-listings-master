
import * as React from 'react';
import { filterBarProps } from './CustomTypes';
import FilterTag from './FilterTag';
class FilterBar extends React.Component<filterBarProps, any> {
  constructor(props: any) {
    super(props);
    this.clearFilters = this.clearFilters.bind(this);
  }
  clearFilters(): void {
    this.props.filterTags?.forEach((filter) => this.props.removeFilter(filter));
  }
  render() {
    var tags: JSX.Element[] = [];
    if (this.props.filterTags != null) {
      this.props.filterTags.forEach((tag, tag2, set): void => {
        tags.push(<FilterTag key={tag} filterTag={tag} removeFilter={this.props.removeFilter}/>)
      })
      return (
        <div id="filter-bar">
          <div id="filter-tags">
          {
            tags.map((ele: JSX.Element): JSX.Element => {
              return ele;
            })
          }
          </div>
          <div id="filter-clear" onClick={this.clearFilters}>
            Clear
          </div>
        </div>
      );
    }
    else {
      return <div id="filter-bar-empty"></div>
    }
  }
}

export default FilterBar;