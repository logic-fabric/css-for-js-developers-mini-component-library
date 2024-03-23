import { VisuallyHidden } from "../components/atoms/VisuallyHidden/VisuallyHidden";

export default {
  title: "Example/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InProgress = {
  args: {
    children: "I am visually hidden!",
  },
};
