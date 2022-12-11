import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Public/css/style.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HelmetProvider, Helmet } from "react-helmet-async";
import AppRouter from "./appRouter";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";

//NOTE Create Custom Theme
const theme = createTheme({
  typography: {
    fontFamily: "Vazir , IRANSans1 , roboto"
  }
});

//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

function App() {

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>فروشگاه اینترنتی دیجی کالا</title>
          </Helmet>
          <AppRouter />

        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>

  );
}

export default App;
