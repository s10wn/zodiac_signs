import { NotFoundPage } from "@/components/views/not-found-page";
import { MainPage } from "@/components/views/main-page";

import { getMainPage, getZodiacRoute } from "./routes";
import { AppRoutes } from "./app-routes.enum";

import type { AppRouteProps } from "@/types/app-route-props.type";
import { ZodiacPage } from "@/components/views/zodiac-page";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getMainPage(),
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
  [AppRoutes.ZODIAC]: {
    path: getZodiacRoute(":sign"),
    element: <ZodiacPage />,
  },
};

export const publicRoutes = Object.values(routeConfig);
