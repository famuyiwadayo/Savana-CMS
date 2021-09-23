export default {
  name: "propertyType",
  title: "Property Type",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
    },
    prepare({ title, description }) {
      return {
        title: `${title}`,
        subtitle: `${description}`,
      };
    },
  },
};
