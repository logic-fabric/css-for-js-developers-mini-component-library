import { ProgressBar } from "../components/atoms/ProgressBar/ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InProgress = {
  args: {
    value: 62,
  },
};
