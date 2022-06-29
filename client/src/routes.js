import Auth from "./pages/Auth"
import Music from "./pages/Music"
import MyProfile from "./pages/MyProfile"
import { LOGIN_ROUTE, MUSIC_ROUTE, MY_PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

export const authRoutes = [
  {
    path: MY_PROFILE_ROUTE,
    element: MyProfile
  }
];

export const publicRoutes = [
  {
    path: MUSIC_ROUTE,
    element: Music
  },
  {
    path: LOGIN_ROUTE,
    element: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    element: Auth
  },
]
