import { fetchAPI } from "./utils/fetch-api";
import {Banner} from "@/app/[lang]/components/Banner";

interface FilmsResponse {
  data: Datum[];
  meta: Meta;
}

interface Datum {
  id:         number;
  attributes: Attributes;
}

interface Attributes {
  title:       string;
  slug:        string;
  content:     string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  locale:      string;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}



export default async function Home({params} : {params: {lang:string}}) {
  async function fetchData() {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/films`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: "*",
        locale: params.lang
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      return responseData;
    } catch (error) {
      console.error(error);
    }
  }
  const getData: FilmsResponse = await fetchData();

  

  return (
    <section>
      <Banner paramsLang={params.lang} />
    </section>
  );
}
