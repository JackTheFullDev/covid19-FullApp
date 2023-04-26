import "./App.css";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { DashboardPage } from "./pages/DashboardPage";
import { TablePage } from "./pages/TablePage";
import { ApiContextProvider } from "./context/ApiContext";
import { ChartPage } from "./pages/ChartPage";
import { QueryClientProvider,QueryClient } from "react-query";
function App() {
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ApiContextProvider>
        <BrowserRouter basename="/covid19-FullApp">
          <Routes>
            <Route path="/covid19-FullApp" element={<Home />}></Route>
            <Route path="/covid19-FullApp/Dashbord" element={<DashboardPage />}></Route>
            <Route path="/covid19-FullApp/Table" element={<TablePage />}></Route>
            <Route path="/covid19-FullApp/Chart" element={<ChartPage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ApiContextProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
