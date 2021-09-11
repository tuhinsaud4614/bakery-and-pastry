import { Box, CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="100px">
      <CircularProgress />
    </Box>
  );
};
Loader.displayName = "Loader";
export default Loader;
