import {
  CartIcon,
  DocumentIcon,
  HomeIcon,
  PersonIcon,
  StatsIcon,
} from "components/Icons/Icons";
import SignInBasic from "views/Authentication/SignIn/SignInBasic.js";
import SignUpBasic from "views/Authentication/SignUp/SignUpBasic.js";
import Default from "views/Dashboard/Default.js";
import OrderDetails from "views/Ecommerce/Orders/OrderDetails";
import OrderList from "views/Ecommerce/Orders/OrderList";
import EditProduct from "views/Ecommerce/Products/EditProduct";
import NewProduct from "views/Ecommerce/Products/NewProduct";
import ProductPage from "views/Ecommerce/Products/ProductPage";
import Billing from "views/Pages/Account/Billing.js";
import Invoice from "views/Pages/Account/Invoice.js";
import Settings from "views/Pages/Account/Settings.js";
import Teams from "views/Pages/Profile/Teams.js";

const dashRoutes = [
  // {
  //   name: "Dashboard",
  //   path: "/dashboard",
  //   icon: <HomeIcon color="inherit" />,
  //   authIcon: <HomeIcon color="inherit" />,
  //   collapse: true,
  //   items: [
  //     {
  //       name: "Default",
  //       path: "/dashboard/default",
  //       component: Default,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  {
    name: "PAGES",
    category: "pages",
    items: [
      {
        name: "Pages",
        path: "/pages",
        collapse: true,
        icon: <DocumentIcon color="inherit" />,
        items: [
          // {
          //   name: "Profile",
          //   path: "/profile",
          //   collapse: true,
          //   authIcon: <HomeIcon color="inherit" />,
          //   items: [
          //     {
          //       name: "Teams",
          //       secondaryNavbar: true,
          //       path: "/pages/profile/teams",
          //       component: Teams,
          //       layout: "/admin",
          //     },
          //   ],
          // },
          {
            name: "Account",
            path: "/account",
            collapse: true,
            authIcon: <PersonIcon color="inherit" />,
            items: [
              {
                name: "Settings",
                path: "/pages/account/settings",
                component: Settings,
                layout: "/admin",
              },
              // {
              //   name: "Billing",
              //   component: Billing,
              //   path: "/pages/account/billing",
              //   layout: "/admin",
              // },
              // {
              //   name: "Invoice",
              //   component: Invoice,
              //   path: "/pages/account/invoice",
              //   layout: "/admin",
              // },
            ],
          },
        ],
      },
      {
        name: "Ecommerce",
        path: "/ecommerce",
        icon: <CartIcon color="inherit" />,
        collapse: true,

        items: [
          {
            name: "Products",
            path: "/products",
            collapse: true,
            authIcon: <DocumentIcon color="inherit" />,
            items: [
              {
                name: "New Product",
                component: NewProduct,
                secondaryNavbar: true,
                path: "/ecommerce/products/new-product",
                layout: "/admin",
              },
              {
                name: "Edit Product",
                component: EditProduct,
                path: "/ecommerce/products/edit-product",
                layout: "/admin",
              },
            ],
          },
          {
            name: "Orders",
            path: "/orders",
            collapse: true,
            authIcon: <StatsIcon color="inherit" />,
            items: [
              {
                name: "Order List",
                component: OrderList,
                path: "/ecommerce/orders/order-list",
                layout: "/admin",
              },
              {
                name: "Order Details",
                component: OrderDetails,
                path: "/ecommerce/orders/order-details",
                layout: "/admin",
              },
            ],
          },
        ],
      },
      // {
      //   name: "Authentication",
      //   path: "/authentication",
      //   icon: <PersonIcon color="inherit" />,
      //   collapse: true,
      //   items: [
      //     {
      //       name: "Sign In",
      //       path: "/authentication/sign-in",
      //       collapse: true,
      //       authIcon: <DocumentIcon color="inherit" />,
      //       items: [
      //         {
      //           name: "Basic",
      //           secondaryNavbar: true,
      //           component: SignInBasic,
      //           path: "/authentication/sign-in/basic",
      //           layout: "/auth",
      //         },
      //       ],
      //     },
      //     {
      //       name: "Sign Up",
      //       path: "/authentication/sign-up",
      //       collapse: true,
      //       authIcon: <DocumentIcon color="inherit" />,
      //       items: [
      //         {
      //           name: "Basic",
      //           secondaryNavbar: true,
      //           component: SignUpBasic,
      //           path: "/authentication/sign-up/basic",
      //           layout: "/auth",
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];

export default dashRoutes;
