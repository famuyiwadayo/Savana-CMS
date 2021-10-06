export default {
  name: "propertyDiscount",
  title: "Discount",
  type: "object",
  fields: [
    {
      name: "hasDiscount",
      title: "Has discount",
      type: "boolean",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "percentage",
      title: "Percentage",
      type: "number",
    },
    {
      name: "initialDeposit",
      title: "Initial Deposit",
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
