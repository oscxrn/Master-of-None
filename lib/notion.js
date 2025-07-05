import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map(page => {
    const title = page.properties.Title.title[0]?.plain_text || "Untitled";
    const date = page.properties.Date.date?.start || null;
    return {
      id: page.id,
      title,
      date,
    };
  });
}
