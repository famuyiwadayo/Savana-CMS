export default {
  name: "propertyDiscount",
  title: "Discount",
  type: "document",
  fields: [
    {
      name: "hasDiscount",
      title: "Has discount",
      type: "boolean",
    },
    {
      name: "percentage",
      title: "Percentage",
      type: "number",
    },
    {
      name: "instalment",
      title: "Instalment Description",
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
