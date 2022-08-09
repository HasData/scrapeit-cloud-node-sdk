declare enum ProxyType {
  'datacenter',
  'residential'
}

declare type CustomHeaders = {
  [headerName: string]: string,
}

declare type ExtractionRules = {
  [propertyName: string]: string,
}

declare type ScenarioStep = {
  evaluate?: string,
  click?: string,
  wait?: number,
  wait_for?: string,
  wait_for_and_click?: string,
  scroll_x?: number,
  scroll_y?: number,
  fill?: Array<string>
}

declare type ScrapeitCloudAPIParams = {
  url: string,
  screenshot?: boolean,
  wait?: number,
  wait_for?: string,
  proxy_type?: string|ProxyType,
  proxy_country?: string,
  block_resources?: boolean,
  block_urls?: Array<string>,
  headers?: CustomHeaders,
  extract_rules?: ExtractionRules
  js_scenario?: Array<ScenarioStep>,
  window_height?: number,
  window_width?: number,
}

declare type ScrapeitCloudAPIResponse = {
  screenshot?: string,
  content: string,
  headers?: Object,
  cookies?: Array<Object>
}

declare class ScrapeitCloud {
  private readonly apiKey: string;
  constructor(apiKey: string);

  scrape(params: ScrapeitCloudAPIParams): Promise<ScrapeitCloudAPIResponse>;
}

export default ScrapeitCloud;
