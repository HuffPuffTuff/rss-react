namespace IComic {
  export interface TextObject {
    type: string;
    language: string;
    text: string;
  }

  export interface Url {
    type: string;
    url: string;
  }

  export interface Series {
    resourceURI: string;
    name: string;
  }

  export interface Variant {
    resourceURI: string;
    name: string;
  }

  export interface Collection {
    resourceURI: string;
    name: string;
  }

  export interface CollectedIssue {
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

  export interface Item {
    resourceURI: string;
    name: string;
    role: string;
  }

  export interface Creators {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item[];
  }

  export interface Item2 {
    resourceURI: string;
    name: string;
    role: string;
  }

  export interface Characters {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item2[];
  }

  export interface Item3 {
    resourceURI: string;
    name: string;
    type: string;
  }

  export interface Stories {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item3[];
  }

  export interface Item4 {
    resourceURI: string;
    name: string;
  }

  export interface Events {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item4[];
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
    series: Series;
    variants: Variant[];
    collections: Collection[];
    collectedIssues: CollectedIssue[];
    dates: Date[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Image[];
    creators: Creators;
    characters: Characters;
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
}

export default IComic;
