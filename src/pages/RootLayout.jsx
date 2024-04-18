import { Outlet } from "react-router-dom";
import Navegation from "../components/Navegation";

export default function RootLayout () {
  return (
    <>
      <Navegation />
      <div>
        <Outlet />
      </div>
      <footer>
        <p>Feito com React e React Router</p>
      </footer>

    </>
  )
}