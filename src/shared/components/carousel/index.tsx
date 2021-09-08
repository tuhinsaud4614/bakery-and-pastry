import { Box, Chip } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import classNames from "classnames";
import {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useStyles from "./index.style";
import Item, { ItemProps } from "./item";
import useMemoChildren from "./useMemoChildren";

let interval: NodeJS.Timeout;

interface Props {
  actionBtn?: boolean;
  autoplay?: boolean;
  paginate?: boolean;
  classes?: {
    root?: string;
    container?: string;
    slide?: string;
    prevBtn?: string;
    nextBtn?: string;
    pagination?: string;
    page?: string;
  };
  children?: ReactElement<ItemProps> | ReactElement<ItemProps>[];
}

const CarouselComponent = ({
  actionBtn = false,
  autoplay = false,
  paginate = false,
  classes,
  children,
}: Props) => {
  const IS_ARRAY = Array.isArray(children) && children.length > 1;
  const styles = useStyles();
  const [current, setCurrent] = useState<number>(1);
  const [translateX, setTranslateX] = useState<number>(0);
  const containerRef = useRef<HTMLUListElement>(null);

  const pageChangeHandler = (pageNo: number) => {
    setCurrent(pageNo);
    if (containerRef.current) {
      containerRef.current.style.transitionDuration = "400ms";
      setTranslateX(containerRef.current.clientWidth * pageNo);
    }
  };

  const actionHandler = useCallback(
    (direction: "prev" | "next") => {
      if (IS_ARRAY) {
        if (containerRef.current) {
          containerRef.current.style.transitionDuration = "400ms";
          if (direction === "next") {
            if (current >= children.length) {
              setTranslateX(
                containerRef.current.clientWidth * (children.length + 1)
              );
              setCurrent(1);
            } else {
              setTranslateX(containerRef.current.clientWidth * (current + 1));
              setCurrent((prev) => ++prev);
            }
          } else {
            if (current <= 1) {
              setTranslateX(0);
              setCurrent(children.length);
            } else {
              setTranslateX(containerRef.current.clientWidth * (current - 1));
              setCurrent((prev) => --prev);
            }
          }
        }
      }
    },
    [current, IS_ARRAY, children]
  );

  useEffect(() => {
    const translateHandler = () => {
      if (containerRef.current) {
        setTranslateX(containerRef.current.clientWidth * current);
      }
    };
    translateHandler();

    const resizeHandler = () => {
      translateHandler();
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // autoplay carousel
  useEffect(() => {
    if (autoplay) {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(() => {
        actionHandler("next");
      }, 4000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [actionHandler, autoplay]);

  // transitionend Effect
  useEffect(() => {
    const transitionHandler = () => {
      if (IS_ARRAY) {
        if (current <= 1) {
          if (containerRef.current) {
            containerRef.current.style.transitionDuration = "0ms";
            setTranslateX(containerRef.current.clientWidth * current);
          }
        }

        if (current >= children.length) {
          if (containerRef.current) {
            containerRef.current.style.transitionDuration = "0ms";
            setTranslateX(containerRef.current.clientWidth * children.length);
          }
        }
      }
    };

    document.addEventListener("transitionend", transitionHandler);
    return () => {
      document.removeEventListener("transitionend", transitionHandler);
    };
  }, [current, IS_ARRAY, children]);

  const slides = useMemoChildren<
    ReactElement<ItemProps> | ReactElement<ItemProps>[]
  >(children, classes?.slide);

  return (
    <Box className={classNames(classes?.root, styles.root)}>
      <ul
        className={classNames(classes?.container, styles.container)}
        ref={containerRef}
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`,
        }}
      >
        {slides}
      </ul>
      {IS_ARRAY && actionBtn && (
        <Fragment>
          <ChevronLeft
            aria-label="prev-btn"
            className={classNames(classes?.prevBtn, styles.btn, styles.btnPrev)}
            onClick={() => actionHandler("prev")}
          />
          <ChevronRight
            aria-label="next-btn"
            className={classNames(classes?.prevBtn, styles.btn, styles.btnNext)}
            onClick={() => actionHandler("next")}
          />
        </Fragment>
      )}

      {IS_ARRAY && paginate && (
        <Box className={styles.pagination}>
          {children.map((_, i) => (
            <Chip
              aria-label="page"
              onClick={() => pageChangeHandler(i + 1)}
              key={i}
              component="button"
              variant="outlined"
              color="secondary"
              className={classNames(
                styles.page,
                i + 1 === current && styles.pageActive
              )}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

CarouselComponent.displayName = "Carousel";
const Carousel = Object.assign(CarouselComponent, {
  Item: Item,
});
export default Carousel;
