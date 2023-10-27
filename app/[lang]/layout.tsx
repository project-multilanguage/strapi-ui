import type { Metadata } from "next";
import "./globals.css";
import { fetchAPI } from "./utils/fetch-api";

import { i18n } from "@/i18n-config";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "DarkPedia",
};

async function getGlobal(lang:string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: ["navigation.links"],
    locale: lang
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  if (!global.data) return null;

  const { navigation } = global.data.attributes;

  return (
    <html lang={params.lang}>
      <body>
        <Navbar paramsLang={params.lang} navigations={navigation.links} />
        <main>{children}</main>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
