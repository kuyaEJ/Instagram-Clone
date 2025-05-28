// Also known as Layout.jsx, holds the boilerplate or html layout
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import PageLayout from "./Layouts/PageLayout/PageLayout.jsx"
function App() {
  return (
  <PageLayout>
  <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/auth' element={<AuthPage />}></Route>
  </Routes>
  </PageLayout>
  );
}

export default App
