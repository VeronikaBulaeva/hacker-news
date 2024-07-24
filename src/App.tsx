import AppRouterProvider from "@/components/router-provider";
import Header from "@/components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <AppRouterProvider />
    </>
  );
}

export default App;