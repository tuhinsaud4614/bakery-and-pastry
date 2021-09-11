import classNames from "classnames";
import { ReactNode } from "react";
import AdminHeader from "../../../../shared/components/navigation/admin-header";
import AdminSidebar from "../../../../shared/components/navigation/admin-sidebar";
import { useAppSelector } from "../../../../store";
import useStyles from "./index.style";

const Wrapper = ({ children }: { children?: ReactNode | ReactNode[] }) => {
  const styles = useStyles();
  const { open } = useAppSelector((state) => state.settings.adminSidebarOpen);

  return (
    <div className={styles.root}>
      <AdminHeader />
      <AdminSidebar />
      <main className={classNames(styles.content, open && styles.contentShift)}>
        {children}
      </main>
    </div>
  );
};

Wrapper.displayName = "Admin.Wrapper";

export default Wrapper;
