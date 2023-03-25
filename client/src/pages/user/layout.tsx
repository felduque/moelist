import { UserSidebar } from "@/components/User/UserSidebar";
import { useAppContext } from "@/utils/state";
import Link from "next/link";

const layout = ({ children }: any) => {
  const { user } = useAppContext();

  return (
    <section className="container-fluid py-5 px-3 p-sm-5 text-white ">
      <div className="row gap">
        <div className="col-12 col-xl-3 ">
          <UserSidebar />
        </div>
        <div className="col-12 col-xl-9 px-3 pt-5 pt-xl-0 ps-xl-5">
          <ul className="nav nav-pills nav-fill nav-user gap-3 gap-sm-4">
            <li className="nav-item bg-dark">
              <Link
                href="/user/configurar"
                className={`nav-link`}
                aria-current="page"
              >
                Configurar Perfil
              </Link>
            </li>
            <li className="nav-item bg-dark">
              <Link href="/user/favoritos" className={`nav-link`}>
                Favoritos
              </Link>
            </li>
            {user?.role === "Author" && (
              <li className="nav-item bg-dark">
                <Link href="/user/publicar" className={`nav-link`}>
                  publicar
                </Link>
              </li>
            )}
          </ul>
          <div className="py-4">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default layout;
