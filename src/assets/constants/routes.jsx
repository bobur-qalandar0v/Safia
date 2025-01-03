import ZaqasButtonPage from "../../page/ZaqaaButton/ZaqasButtonPage";
import Zaqas3 from "../../page/zaqas3/zaqas3";
import Zaqas2 from "../../page/zaqasButton2/zaqas2";
import Zaqas3Item from "../../page/zaqasItem/zaqas3Item";
import Basket from "../../page/zaqasItemPage/Basket";
import ZaqasItemPage from "../../page/zaqasItemPage/zaqasItemPage";
import Card from "../components/Main/card";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Card />,
  },
  {
    id: 2,
    path: "/zaqas",
    element: <ZaqasButtonPage />,
  },
  {
    id: 3,
    path: "/zaqas2",
    element: <Zaqas2 />,
  },
  {
    id: 4,
    path: "/zaqas3",
    element: <Zaqas3 />,
  },
  {
    id: 5,
    path: "/zaqas3Item",
    element: <Zaqas3Item />,
  },
  {
    id: 5,
    path: "/zaqasItemPage/:id",
    element: <ZaqasItemPage />,
  },
  {
    id: 6,
    path: "/basket",
    element: <Basket />,
  },
];
