export type NavigationItem = {
  label: string;
  href: string | null;
  status: "implemented" | "pending";
  isPrimary?: boolean;
};

export const mainNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    status: "implemented",
  },
  {
    label: "About",
    href: "/#about",
    status: "implemented",
  },
  {
    label: "What We Do",
    href: "/#what-we-do",
    status: "implemented",
  },
  {
    label: "Stories",
    href: "/#stories",
    status: "implemented",
  },
  {
    label: "Get Involved",
    href: "/#get-involved",
    status: "implemented",
    isPrimary: true,
  },
];
