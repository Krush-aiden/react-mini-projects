import { useState } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import AllHooksRenderState from "../AllHooksRenderSeq";
import RoutingParams from "./RoutingParams";
import UseStateCom from "./UseStateCom";
import UseEffectCom from "./UseEffectCom";
import UseRefCom from "./UseRefCom";
import UseCallbackCom from "./UseCallback";
import UseCustomHooks from "./UseCustomHooks";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div>
        <nav>
          <ul id="Navbar">
            <li>
              <NavLink
                to="/Home"
                onClick={() => handleLinkClick("/Home")}
                className={activeLink === "/use-state" ? "active-link" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-State"
                className={activeLink === "/use-State" ? "active-link" : ""}
                onClick={() => handleLinkClick("/use-State")}
              >
                use-State
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-Effect"
                className={activeLink === "/use-Effect" ? "active-link" : ""}
                onClick={() => handleLinkClick("/use-Effect")}
              >
                use-Effect
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-Ref"
                className={activeLink === "/use-Ref" ? "active-link" : ""}
                onClick={() => handleLinkClick("/use-Ref")}
              >
                use-Ref
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-Callback"
                className={activeLink === "/use-Callback" ? "active-link" : ""}
                onClick={() => handleLinkClick("/use-Callback")}
              >
                use-Callback
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/use-Memo"
                className={activeLink === "/use-Memo" ? "active-link" : ""}
                onClick={() => handleLinkClick("/use-Memo")}
              >
                use-Memo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/All-Hooks-Render-State"
                className={
                  activeLink === "/All-Hooks-Render-State" ? "active-link" : ""
                }
                onClick={() => handleLinkClick("/All-Hooks-Render-State")}
              >
                All-Hooks-Render-State
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UseCustomHooks"
                className={activeLink === "/Custom-Hooks" ? "active-link" : ""}
                onClick={() => handleLinkClick("/Custom-Hooks")}
              >
                Custom-Hooks
              </NavLink>
            </li>

            <li>
              <NavLink to="/RoutePage">Route Page</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route
          path="/All-Hooks-Render-State"
          element={<AllHooksRenderState />}
        />
        <Route
          path="/RoutePage"
          element={<RoutingParams nameDetails={{ name: "Routing" }} />}
        />
        <Route path="/use-State" element={<UseStateCom />} />
        <Route path="/use-Effect" element={<UseEffectCom />} />
        <Route path="/use-ref" element={<UseRefCom />} />
        <Route path="/use-Callback" element={<UseCallbackCom />} />
        <Route path="/UseCustomHooks" element={<UseCustomHooks />} />
      </Routes>
    </div>
  );
}

export default Navbar;
