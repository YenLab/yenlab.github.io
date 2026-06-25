import { defineConfig } from "astro/config";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserPage = repositoryName === `${repositoryOwner}.github.io`;
const base = process.env.BASE_PATH ?? (repositoryName && !isUserPage ? `/${repositoryName}` : "/");

export default defineConfig({
  base,
  output: "static"
});
