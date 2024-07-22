import { writeFileSync } from "node:fs";
import qs from "qs";
 fix-detached-head

const url =
  "http://localhost:1337/api/posts" +
  "?" +
  qs.stringify(
    {
      fields: ["slug", "title", "description", "publishedAt", "body"], // Hapus "author" dari sini
      populate: { image: { fields: ["url"] } },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 3 },
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const posts = JSON.stringify(body, null, 2);
=======

// console.log(posts);
 main

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
