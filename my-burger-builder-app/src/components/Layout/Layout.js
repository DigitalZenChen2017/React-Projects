import React from "react";
import Aux from "../../hoc/Aux";
import styles from "./Layout.css";

const layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, Backdrop/BannerImage
      <main className={styles.Content}>{props.children}</main>
    </div>
  </Aux>
);

export default layout;
