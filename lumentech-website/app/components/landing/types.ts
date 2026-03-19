export type Category = "all" | "web" | "data" | "auto" | "cloud";

export type Project = {
  title: string;
  category: Exclude<Category, "all">;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageAlt: string;
  tech: string;
  duration: string;
  client: string;
  result: string;
  badge: string;
  tags: string[];
};
