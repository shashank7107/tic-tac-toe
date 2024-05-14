import styles from "./PlayButton.module.css";
import { motion } from "framer-motion";

function PlayButton() {
  return (
    <motion.div whileTap={{ scale: 0.9 }} className={styles.btnText}>
      PLAY
    </motion.div>
  );
}

export default PlayButton;
