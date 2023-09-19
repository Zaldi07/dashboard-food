import SharedLayout from "./Pages/SharedLayout";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import FoodOrder from "./Pages/FoodOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="food-order" element={<FoodOrder />} />
            <Route path="food-order2" element={<FoodOrder />} />
            <Route path="food-order3" element={<FoodOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
