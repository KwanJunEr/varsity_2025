import { Gift, Users, LayoutDashboard, User, Bell } from "lucide-react";

export const sidebarLinks = [
  {
    icon: LayoutDashboard,
    route: "/lender/dashboard",
    label: "Dashboard",
  },
  {
    icon: Users,
    route: "/lender/community",
    label: "Community",
  },

  {
    icon: Gift,
    route: "/lender/rewards",
    label: "Rewards",
  },
  {
    icon: Bell,
    route: "/lender/notify",
    label: "Review",
  },
  {
    icon: User,
    route: "/lender/profile",
    label: "Profile",
  },
];
