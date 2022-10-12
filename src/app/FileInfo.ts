export interface FileInfo {
  name: string,
  service: string,
  env: string,
  exists: boolean,
  "full-path"?: string,
  "spring-properties"?: JSON,
  yaml?: JSON
}
