import { Breadcrumbs } from "../components/molecules/Breadcrumbs/Breadcrumbs";

export default {
  title: "Example/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    crumbs: { control: "object" },
  },
};

export const SeveralCrumbs = {
  args: {
    crumbs: [
      { name: "Home", url: "/" },
      { name: "Living Room", url: "/living" },
      { name: "Couches", url: "/living/couch" },
      { name: "You are here", url: "/living/couch/sectional" },
    ],
  },
};

export const JustACrumb = {
  args: {
    crumbs: [{ name: "Home", url: "/" }],
  },
};
