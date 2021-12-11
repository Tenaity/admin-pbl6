import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
    teal: {
      500: "rgb(79, 209, 197)",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg:
          document.documentElement.layout === "auth"
            ? mode("white", "gray.800")(props)
            : mode("gray.50", "gray.800")(props),
        fontFamily: "Helvetica, sans-serif",
      },
      html: {
        fontFamily: "Helvetica, sans-serif",
      },
    }),
  },
};
