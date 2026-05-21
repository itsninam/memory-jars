import React from "react";
import Navigation from "../components/Navigation";
import IconLabel from "../components/IconLabel";
import { LuLock, LuLockOpen } from "react-icons/lu";

function MainNav() {
  return (
    <Navigation>
      <Navigation.Item>
        <Navigation.Link to="sealed">
          <IconLabel label="Sealed" icon={<LuLock />} gap="12px" />
        </Navigation.Link>
        <Navigation.Link to="unsealed">
          <IconLabel label="Unsealed" icon={<LuLockOpen />} gap="12px" />
        </Navigation.Link>
      </Navigation.Item>
    </Navigation>
  );
}

export default MainNav;
