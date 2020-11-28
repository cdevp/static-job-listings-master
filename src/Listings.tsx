import * as React from 'react';
import * as dataJson from './data.json';
import ListingRow from './ListingRow';
import { listingType, listingsProps } from './CustomTypes';

class Listings extends React.Component<listingsProps, any> {
  constructor(props: listingsProps) {
    super(props);
    var roleMap: Map<string, Set<number>> = new Map<string, Set<number>>();
    var levelMap: Map<string, Set<number>> = new Map<string, Set<number>>();
    var langMap: Map<string, Set<number>> = new Map<string, Set<number>>();
    var toolMap: Map<string, Set<number>> = new Map<string, Set<number>>();
    dataJson.forEach(function(ele): void {
      if (roleMap.has(ele.role)) {
        roleMap.get(ele.role)?.add(ele.id)
      }
      else {
        roleMap.set(ele.role, new Set<number>().add(ele.id))
      }
      if (levelMap.has(ele.level)) {
        levelMap.get(ele.level)?.add(ele.id)
      }
      else {
        levelMap.set(ele.level, new Set<number>().add(ele.id))
      }
      if (langMap.has(ele.level)) {
        langMap.get(ele.level)?.add(ele.id)
      }
      else {
        langMap.set(ele.level, new Set<number>().add(ele.id))
      }

      ele.languages.forEach(lang =>  {
        if (langMap.has(lang)) {
          langMap.get(lang)?.add(ele.id)
        }
        else {
          langMap.set(lang, new Set<number>().add(ele.id))
        }
      });
      ele.tools.forEach(tool => {
        if (toolMap.has(tool)) {
          toolMap.get(tool)?.add(ele.id)
        }
        else {
          toolMap.set(tool, new Set<number>().add(ele.id))
        }
      });
    });
    this.state = {
      roles: roleMap,
      levels: levelMap,
      langs: langMap,
      tools: toolMap
    }
  }
  renderListings(listingData: listingType[]): JSX.Element {
    var idSet: Set<number> = new Set<number>();
    dataJson.map((ele) => idSet.add(ele.id)); 
    if (this.props.filterTags == null) {
      return (
      <div id="listings">{
        listingData.map((listing): JSX.Element => 
          <ListingRow key={listing.id} rowData={listing} addFilter={this.props.addFilter}/>
        )
      }
      </div>
      );
    }
    else {
      this.props.filterTags.forEach((tag) => {
        if(this.state.roles.has(tag)) {
          const tagSet = this.state.roles.get(tag);
          idSet.forEach((id: number) => !tagSet.has(id) ? idSet.delete(id) : ''); 
        }
        else if(this.state.levels.has(tag)) {
          const levelSet = this.state.levels.get(tag);
          idSet.forEach((id: number) => !levelSet.has(id) ? idSet.delete(id) : ''); 
        }
        else if(this.state.langs.has(tag) && this.state.tools.has(tag)) {
          const langSet = this.state.langs.get(tag);
          const toolSet = this.state.tools.get(tag);
          idSet.forEach((id: number) => !(langSet.has(id) | toolSet.has(id))? idSet.delete(id) : ''); 
        }
        else if(this.state.langs.has(tag)) {
          const langSet = this.state.langs.get(tag);
          idSet.forEach((id: number) => !langSet.has(id) ? idSet.delete(id) : ''); 
        }
        else if(this.state.tools.has(tag)) {
          const toolSet = this.state.tools.get(tag);
          idSet.forEach((id: number) => !toolSet.has(id) ? idSet.delete(id) : ''); 
        }
      })
      return (
      <div id="listings">
      {
        listingData.map((listing): JSX.Element => 
          idSet.has(listing.id) ?
          <ListingRow key={listing.id} rowData={listing} addFilter={this.props.addFilter}/>
          : <div key={listing.id}></div>)
      }
      </div>
      );
   }
  }
  render() {
    return this.renderListings(dataJson);
  }
}

export default Listings;