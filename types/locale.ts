export interface LangContent {
    mainHeader: string;
    footer: string;
}

export interface PageContent {
    id: string;
    path: string;
    subHeader: string;
    icon: string;
}

export interface LangProps{
    currentLang: string;
    lang: {
        fr: LangContent;
        en: LangContent;
    },
    pages: PageContent[];
}