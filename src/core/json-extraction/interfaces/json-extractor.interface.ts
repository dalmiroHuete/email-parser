export interface JsonExtractor {
  extract(email: any): Promise<any | null>;
}
