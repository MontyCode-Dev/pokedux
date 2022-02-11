import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '../components';
import { Home, NotFound } from '../containers';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
