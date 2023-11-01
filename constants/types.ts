export interface Instructors {
  description: string;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface Features {
  icon: string;
  subtitle: string;
  title: string;
}

export interface Pointers {
  color: string;
  icon: string;
  text: string;
}

export interface ExclusiveFeatures {
  checklist: string[];
  file_type: string;
  file_url: string;
  title: string;
  video_thumbnail: string;
}

export interface About {
  description: string;
  icon: string;
  title: string;
}

export interface Trailer {
  download_link: string;
  html: string;
}


export type SectionValues<T> = T;

export interface Sections<T> {
  name: string;
  order_idx: number;
  type: string;
  values: SectionValues<T>[];
}
export interface ProductPageData<T> {
  slug: string;
  id: number;
  title: string;
  description: string;
  sections: Sections<T>[];
  cta_text: Record<string, string>;
  checklist: Pointers[];
  seo: {
    title: string;
    defaultMeta: MetaTag[]
  }
}

export interface ProductResponse<T> {
  code: number;
  data: ProductPageData<T>;
}
export type SectionResponse<T> = Sections<T> | null;

export interface RenderHTMLProps {
  htmlContent: string;
}

export interface MetaTag {
  meta_name: string;
  meta_value: string;
  type: string;
}