export const CreatedAt = (requestDate) => {
  const dateObj = new Date(requestDate);
  const date = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();
  return `${date}, ${month} ${year}`;
};

export const BEONSCHOOL = "http://beonschool.test";

export const MENUS = [
  {
    slug: "deep dives",
    action: "browse",
    to: "series",
  },
  {
    slug: "pick a category",
    action: "find",
    to: "topics",
  },
  {
    slug: "learn this next",
    action: "follow",
    to: "path",
  },
  {
    slug: "engage the community",
    action: "discuss",
    to: "forum",
  },
  {
    slug: "things you've saved",
    action: "manage",
    to: "library",
  },
];

