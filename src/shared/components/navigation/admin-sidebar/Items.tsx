import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Dashboard, LocalMall } from "@material-ui/icons";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/constants";

interface ItemProps {
  to: string;
  icon?: ReactNode;
  children: string;
}

const ListItemLink = ({ icon, to, children }: ItemProps) => {
  return (
    <ListItem component={Link} to={to} button>
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
