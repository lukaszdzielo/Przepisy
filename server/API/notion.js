import { Client } from "@notionhq/client";

export default async (req, res) => {

    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    const database = await notion.databases.query({ database_id: process.env.NOTION_DATABASES_ID });

    return database.results;
};