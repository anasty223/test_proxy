import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styles";

export default function Layout() {
  return (
    <Container>

      <Outlet />
    </Container>
  );
}

//      <Route path="movies" element={<MoviesPage />} />
//         <Route path="movies/:movieId" element={<MovieDetailPage />} />

//         <Route path="movies/:movieId" element={<MovieDetailPage />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
