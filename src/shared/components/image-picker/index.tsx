import { Box, Button, FormHelperText } from "@material-ui/core";
import { Close, PhotoCamera } from "@material-ui/icons";
import classNames from "classnames";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import useStyles from "./index.style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChanged: (f: File | null) => void;
  data: File | null;
  helperText?: ReactNode;
  error?: boolean;
  margin?: boolean;
}

const ImagePicker = ({
  data,
  helperText,
  onChanged,
  margin = false,
  error = false,
  id,
  ...rest
}: Props) => {
  const styles = useStyles();
  const [value, setValue] = useState<null | string>(null);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length === 1) {
      const file = event.currentTarget.files[0];
      onChanged(file);
    }
  };

  useEffect(() => {
    if (data && !error) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const result = fileReader.result;
        if (result) {
          setValue(result.toString());
        }
      };
      fileReader.readAsDataURL(data);
    } else {
      setValue(null);
    }
  }, [data, error]);

  if (!!value) {
    return (
      <Box
        mt={margin ? 2 : 0}
        mb={margin ? 1 : 0}
        className={classNames(styles.common, styles.imageContainer)}
      >
        <img
          className={styles.img}
          src={value}
          alt="Picked"
          height="70"
          width="50"
          title="Picked"
        />
        <Close className={styles.removeImage} onClick={() => onChanged(null)} />
      </Box>
    );
  }

  return (
    <Box mt={margin ? 2 : 0} mb={margin ? 1 : 0}>
      <input
        id={id || "image-picker"}
        type="file"
        accept="image/*"
        onChange={changeHandler}
        {...rest}
        className={styles.input}
      />
      <label htmlFor={id || "image-picker"}>
        <Button
          className={styles.common}
          variant="outlined"
          color="secondary"
          aria-label="image picker"
          component="span"
        >
          <PhotoCamera fontSize="large" />
        </Button>
      </label>
      {helperText && (
        <FormHelperText
          id={id || "image-picker"}
          variant="filled"
          error={error}
        >
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};

ImagePicker.displayName = "ImagePicker";
export default ImagePicker;
