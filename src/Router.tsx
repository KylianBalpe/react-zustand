import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@/pages/home/HomePage";
import CounterPage from "@/pages/counter/CounterPage";
import BaseLayout from "@/components/layout/BaseLayout";
import FetchPage from "@/pages/fetch/FetchPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/fetch" element={<FetchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
