import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "white",
        },
        body: {
          color: "white",
        },
      },
    },
  },
});
