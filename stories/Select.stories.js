import { Select } from "../components/atoms/Select/Select";

export default {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InProgress = {
  args: {
    options: [
      { value: "newest", label: "Newest Releases" },
      { value: "price", label: "Price" },
      { value: "curated", label: "Curated" },
    ],
  },
};
