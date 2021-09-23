export default {
  name: "propertyOverview",
  title: "Property Overview",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "listingNumber",
      title: "Listing Number",
      type: "string",
    },
    {
      name: "propertySize",
      title: "Property Size",
      type: "string",
    },
    {
      name: "dateAdded",
      title: "Date Added",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    },
    {
      name: "type",
      title: "Property Type",
      type: "reference",
      weak: true,
      to: [{ type: "propertyType" }],
    },
    {
      name: "status",
      title: "Property Status",
      type: "reference",
      weak: true,
      to: [{ type: "propertyStatus" }],
    },
  ],
};
