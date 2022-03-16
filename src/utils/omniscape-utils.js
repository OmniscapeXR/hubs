export const createEntry = ({ id, title, url, creator, type, previewURL }) => ({
  id,
  allow_remixing: false,
  attributions: {
    creator: creator
  },
  images: {
    preview: {
      url: previewURL
    }
  },
  description: null,
  url,
  type,
  name: title
});
