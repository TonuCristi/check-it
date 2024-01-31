import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import RootLayout from "./ui/RootLayout";
import Note from "./pages/Note";
import Statistics from "./pages/Statistics";
import ErrorPage from "./pages/ErrorPage";

import GlobalStyle from "./styles/globalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Note />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/:noteId",
        element: <Note />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
