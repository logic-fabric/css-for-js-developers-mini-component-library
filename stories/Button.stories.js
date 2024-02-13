import { Button } from "../components/atoms/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const SmallSecondary = {
  args: {
    label: "Button",
    size: "small",
  },
};

export const MediumSecondary = {
  args: {
    label: "Button",
  },
};

export const LargeSecondary = {
  args: {
    label: "Button",
    size: "large",
  },
};
