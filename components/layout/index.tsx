import Head from "next/head";
import Navigation from "@/components/header";
import MetaTags from "../metaTags";
import { MetaTag } from "@/constants/types";

const Layout = ({ pageTitle, meta, children }: {
    pageTitle: string,
    meta: MetaTag[],
    children: React.ReactNode
}) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <MetaTags metaTags={meta} />
            </Head>

            <Navigation />
            {children}
        </>
    )
};


export default Layout;