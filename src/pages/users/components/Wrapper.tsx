import { Box } from "@material-ui/core";
import { ReactNode } from "react";
import UserSidebar from "../../../shared/components/navigation/user-sidebar";

interface Props {
  hideSidebar?: boolean;
  sideChild?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
}

const Wrapper = ({ hideSidebar = false, children, sideChild }: Props) => {
  return (
    <>
      <Box display="flex">
        {!hideSidebar && <UserSidebar />}
        {sideChild && (
          <Box component="div" flexGrow="1">
            {sideChild}
          </Box>
        )}
      </Box>
      {children && <Box component="main">{children}</Box>}
    </>
  );
};

Wrapper.displayName = "User.Router.Wrapper";
export default Wrapper;
