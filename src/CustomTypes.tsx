export type listingType = {  
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type listingsState = {
  filters: Set<string>;
};

export type listingsProps = {
  filterTags: Set<string> | null;
  addFilter: Function;
}

export type filterBarProps = {
  filterTags: Set<string> | null;
  removeFilter: Function;
}

export type filterTagProps = {
  filterTag: string;
  removeFilter: Function;
}