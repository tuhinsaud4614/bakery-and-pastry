import { Box } from "@material-ui/core";
import { ReactNode } from "react";
import UserSidebar from "../../../shared/components/navigation/user-sidebar";

interface Props {
  classes?: {
    root?: string;
    sidebar?: {
      drawer?: string;
      root?: string;
      title?: string;
      items?: string;
      item?: string;
    };
    sideChild?: string;
    children?: string;
  };
  hideSidebar?: boolean;
  sideChild?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
}

const Wrapper = ({
  classes,
  hideSidebar = false,
  children,
  sideChild,
}: Props) => {
  return (
    <>
      <Box display="flex" className={classes?.root} pt={1}>
        <UserSidebar hide={hideSidebar} classes={classes?.sidebar} />
        {sideChild && (
          <Box component="div" flexGrow="1" className={classes?.sideChild}>
            {sideChild}
          </Box>
        )}
      </Box>
      {children && (
        <Box component="main" className={classes?.children}>
          {children}
        </Box>
      )}
    </>
  );
};

Wrapper.displayName = "User.Router.Wrapper";
export default Wrapper;
