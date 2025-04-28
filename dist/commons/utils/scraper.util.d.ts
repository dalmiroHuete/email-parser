export declare class ScraperUtil {
    fetchJsonFromUrl(url: string): Promise<any>;
    findJsonLinkInPage(url: string): Promise<string | null>;
}
