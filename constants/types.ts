export interface ProductPageData {
    slug: string;
    id: number;
    title: string;
    description: string;
    sections: Record<string, unknown>[],
    cta_text: Record<string, string>,
    checklist: Record<string, string>[],
}

export interface ProductResponse {
    code: number;
    data: ProductPageData
}