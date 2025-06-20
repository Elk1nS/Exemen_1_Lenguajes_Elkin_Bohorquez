import { BrowserRouter } from "react-router"
import { AppRouter } from "./router/AppRouter"
import {QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
    

  )
}
export default App
