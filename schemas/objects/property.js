export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "figure" }],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
    {
      title: "Discount",
      name: "discount",
      type: "propertyDiscount",
    },
    {
      title: "Features",
      name: "features",
      type: "array",
      of: [{ type: "featureValue" }],
    },

    {
      title: "Overview",
      name: "overview",
      type: "propertyOverview",
      //   of: [{ type: "reference", to: [{ type: "feature" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "images.0",
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
