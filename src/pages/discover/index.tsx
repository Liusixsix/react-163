import React, { ChangeEvent, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { linkItem, dicoverMenu } from "@/common/local-data";
import { renderRoutes } from "react-router-config";

function Discover(props: any) {
  return (
    <div>
      <div className="Top">
        <ul className="Top-con w1100">
          {dicoverMenu.map((item: linkItem, index: number) => {
            return (
              <li key={item.title}>
                <NavLink to={item.link} activeClassName="active">
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {renderRoutes(props.route.routes)}
    </div>
  );
}

export default Discover;
