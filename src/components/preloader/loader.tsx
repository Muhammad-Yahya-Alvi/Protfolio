"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { opacity, slideUp } from "./anim";
import { usePreloader } from ".";

export default function Index() {
  const { isLoading } = usePreloader();
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [typedName, setTypedName] = useState("");
  const fullName = "Muhammad Yahya Alvi";

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    let position = 0;
    const typing = window.setInterval(() => {
      position += 1;
      setTypedName(fullName.slice(0, position));
      if (position >= fullName.length) window.clearInterval(typing);
    }, 115);
    return () => window.clearInterval(typing);
  }, [isLoading]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
    } Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height
    }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
    } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p className="font-display text-3xl font-bold tracking-tight text-[#c2e1df] md:text-5xl" variants={opacity} initial="initial" animate="enter">
            {typedName}<span className="animate-pulse text-[#90c1be]">|</span>
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
