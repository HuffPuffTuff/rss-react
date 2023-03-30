export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface Resource {
  resourceURI: string;
  name: string;
}

export interface Date {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface PersonItem {
  resourceURI: string;
  name: string;
  type?: string;
  role?: string;
}

export interface Persons {
  available: string;
  returned: string;
  collectionURI: string;
  items: PersonItem[];
}

export interface Stories {
  available: string;
  returned: string;
  collectionURI: string;
  items: EventsStoriesItem[];
}

export interface EventsStoriesItem {
  resourceURI: string;
  name: string;
}

export interface Events {
  available: string;
  returned: string;
  collectionURI: string;
  items: EventsStoriesItem[];
}

export interface ComicAdapter {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  issueNumber: string;
  pageCount: string;
  price: string;
}

export interface Result {
  id: string;
  digitalId: string;
  title: string;
  issueNumber: string;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: string;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Resource;
  variants: Resource[];
  collections: Resource[];
  collectedIssues: Resource[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Persons;
  characters: Persons;
  stories: Stories;
  events: Events;
}

export interface Data {
  offset: string;
  limit: string;
  total: string;
  count: string;
  results: Result[];
}

export interface RootObject {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Data;
  etag: string;
}
