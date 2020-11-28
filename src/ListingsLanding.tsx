import * as React from 'react';
import FilterBar from './FilterBar';
import Listings from './Listings';
import { listingsState } from './CustomTypes'; 
class ListingsLanding extends React.Component<any, listingsState> {
  constructor(props: any) {
    super(props);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.state = {
      filters: new Set<string>(),
    };
  }

  addFilter(filter: string): void {
    console.log('add ' + filter)
    var temp: Set<string>;
    this.setState((state): listingsState => ({
      filters: new Set(state.filters).add(filter)
    }));
  }

  removeFilter(filter: string): void {
    console.log('remove' + filter)
    this.setState((state): listingsState => {
      const newFilter = new Set(state.filters);
      newFilter.delete(filter);
      return ({
        filters: newFilter
      });
    });
  }

  render() {
    return (
      <div id="listings-landing">
        <img id="listings-landing-header" src="./images/bg-header-desktop.svg" 
          alt="header pattern" />
        <FilterBar filterTags={this.state.filters.size == 0 ? null : this.state.filters} 
          removeFilter={this.removeFilter} />
        <Listings filterTags = {this.state.filters.size == 0 ? null : this.state.filters}
          addFilter={this.addFilter} />
      </div>
    );
  }
}

export default ListingsLanding;