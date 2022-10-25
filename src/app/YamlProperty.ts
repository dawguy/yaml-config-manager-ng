export interface YamlProperty {
  key: string,
  val?: string,
  children: YamlProperty[],
}
