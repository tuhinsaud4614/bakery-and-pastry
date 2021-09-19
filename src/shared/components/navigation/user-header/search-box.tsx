import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { KeyboardEvent, useRef } from "react";
import { useHistory, useLocation } from "react-router";
import ROUTES from "../../../../routes/constants";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { onSearch } from "../../../../store/features/search/index.slice";
import useStyles from "./index.style";

const SearchBox = () => {
  const styles = useStyles();
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const rdxDispatch = useAppDispatch();
  const { push, replace } = useHistory();
  const { pathname } = useLocation();
  const searchValue = useAppSelector((state) => state.search.value);

  const clickHandler = () => {
    if (ref.current?.value) {
      if (searchValue.toLowerCase() !== ref.current.value.toLowerCase()) {
        rdxDispatch(
          onSearch(ref.current.value.toLowerCase().replace(/\s+/g, " "))
        );
      }
      if (pathname === ROUTES.user.search.path) {
        if (searchValue.toLowerCase() !== ref.current.value.toLowerCase()) {
          return replace(ROUTES.user.search.path);
        }
      }
      push(ROUTES.user.search.path);
    }
  };

  const pressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };
  return (
    <div className={styles.search}>
      <InputBase
        inputRef={ref}
        onKeyPress={pressHandler}
        placeholder="Search…"
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div
        className={styles.searchIcon}
        aria-label="search"
        onClick={clickHandler}
      >
        <Search />
      </div>
    </div>
  );
};

SearchBox.displayName = "SearchBox";
export default SearchBox;
