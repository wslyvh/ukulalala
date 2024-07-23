import { MajorScales } from "@/data/keys";
import { SITE_URL } from "@/utils/site";
import { MetadataRoute } from "next";
import progressions from "@/data/progressions.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${SITE_URL}/progressions`,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    ...MajorScales.flatMap((scale) => {
      return progressions.map((progression) => {
        return {
          url: `${SITE_URL}/progressions/${
            scale.key
          }/${progression.progression.join("-")}`,
          lastModified: new Date(),
          changeFrequency: "never",
          priority: 0.6,
        };
      });
    }),
  ] as MetadataRoute.Sitemap;

  return pages;
}
