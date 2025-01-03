export const urls = {
  card: {
    get: "/card",
    posts: "/card",
  },
  card_icons: {
    get: "/card_icons",
    posts: "/card_icons",
  },
  sets: {
    get: "/sets",
    post: "/sets",
    edit: (id) => `/sets/${id}`,
  },
  item_page: {
    get: "/item_page",
  },
};
