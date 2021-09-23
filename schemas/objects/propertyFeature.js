export default {
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "figure",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "color",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "icon",
    },
    prepare({ title, description, media }) {
      return {
        title: `${title}`,
        subtitle: `${description}`,
        media,
      };
    },
  },
};
