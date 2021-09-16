import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Dashboard, LocalMall } from "@material-ui/icons";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/constants";
import { useAppDispatch } from "../../../../store";
import { toggleAdminMenu } from "../../../../store/features/settings/index.slice";

interface ItemProps {
  to: string;
  icon?: ReactNode;
  children: string;
}

const ListItemLink = ({ icon, to, children }: ItemProps) => {
  const rdxDispatch = useAppDispatch();
  const theme = useTheme();
  const queries = useMediaQuery(theme.breakpoints.up("sm"));

  const onMobileClose = () => {
    if (!queries) {
      rdxDispatch(toggleAdminMenu(false));
    }
  };
  return (
    <ListItem component={Link} onClick={onMobileClose} to={to} button>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};
ListItemLink.displayName = "AdminSidebar.ListItemLink";

const Items = () => {
  return (
    <List component="nav">
      <ListItemLink to={ROUTES.admin.dashboard.path} icon={<Dashboard />}>
        {ROUTES.admin.dashboard.name}
      </ListItemLink>
      <ListItemLink to={ROUTES.admin.product.path} icon={<LocalMall />}>
        {ROUTES.admin.product.name}
      </ListItemLink>
    </List>
  );
};

Items.displayName = "AdminSidebar.List";
export default Items;
