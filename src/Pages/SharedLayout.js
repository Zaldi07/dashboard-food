import { styled } from "styled-components";
import SideBar from "../componets/SideBar";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router-dom";
import SideBarSmall from "../componets/SideBarSmall";

const SharedLayout = () => {
  const Wrapper = styled.section`
    .dashboard {
      display: grid;
      grid-template-columns: 1fr;
    }
    .dashboard-page {
      width: 90vw;
      margin: 0 auto;
      padding: 2rem 0;
    }
    @media (min-width: 992px) {
      .dashboard {
        grid-template-columns: auto 1fr;
      }
      .dashboard-page {
        width: 100%;
        padding: 3%;
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <main className="dashboard ">
          <SideBar />
          <SideBarSmall />
          <div>
            <Navbar />
            <div className="dashboard-page  ">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
