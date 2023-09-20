import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const animate = { opacity: 0, y: -20 };
  const transition = { duration: 0.5, type: "spring" };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          stiffness: 100,
          type: "spring",
          delay: 0.5,
        },
      }}
      ref={ref}
      exit={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
