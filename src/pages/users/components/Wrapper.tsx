import { Box } from "@material-ui/core";
import { ReactNode } from "react";

import UserSidebar from "../../../shared/components/navigation/user-sidebar";

interface Props {
  sideChild: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
}

const Wrapper = ({ children, sideChild }: Props) => {
  return (
    <>
      <Box display="flex">
        <UserSidebar />
        <Box component="div" flexGrow="1">
          {sideChild}
        </Box>
      </Box>
      {children && <Box component="main">{children}</Box>}
    </>
  );
};

Wrapper.displayName = "User.Router.Wrapper";
export default Wrapper;
