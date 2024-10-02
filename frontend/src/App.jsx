import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TransactionPage from "./pages/TransactionPage";
import NotFound from "./pages/NotFound";
import Header from "./components/ui/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";

function App() {
  const {loading, data, error}=useQuery(GET_AUTHENTICATED_USER) // these 3 objects will get from apollo, easy!
  console.log("Authenticated User:",data)
  return (
    <>
    {data?.authUser && <Header/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <h1 className="text-3xl font-bold underline text-white">Hello world!</h1> */}
    </>
  );
}

export default App
