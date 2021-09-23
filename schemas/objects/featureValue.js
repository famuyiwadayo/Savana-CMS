export default {
  name: "featureValue",
  title: "Feature Value",
  type: "object",
  fields: [
    {
      name: "count",
      title: "How many",
      type: "number",
    },
    {
      name: "pFeature",
      title: "Feature",
      type: "reference",
      to: [{ type: "feature" }],
    },
  ],
  preview: {
    select: {
      count: "count",
      title: "pFeature.title",
      media: "pFeature.icon",
    },
    prepare: ({ count, title, media }) => ({
      title: `${count ?? ""} ${title}${count > 1 ? "s" : ""}`,
      media,
    }),
  },
};
