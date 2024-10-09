import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "src/ui/home/HomeView";
import { HOME_ROUTE } from "src/ui/home/route";

export const Route = createFileRoute(HOME_ROUTE)({
  component: () => <HomeView />,
});
