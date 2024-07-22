import { writeFileSync } from "node:fs";
import qs from "qs";

// console.log(posts);

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
