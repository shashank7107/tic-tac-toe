import { useState } from "react";
import styles from "./Grid.module.css";
import { motion } from "framer-motion";

function Grid(this: any) {
  function cellClickHandler(cellId: number) {
    if (gridData[cellId] === "") {
      var data = [...gridData];
      data[cellId] = symbol;
      setGridData(data);
      setSymbol((prev) => {
        if (prev === "X") return "O";
        else return "X";
      });
    }
  }
  const [symbol, setSymbol] = useState("X");
  const [gridData, setGridData] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <motion.div
          className={styles.cell}
          onClick={cellClickHandler.bind(this, 0)}
        >
          {gridData[0]}
        </motion.div>
        <div className={styles.separator_v}></div>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 1)}>
          {gridData[1]}
        </div>
        <div className={styles.separator_v}></div>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 2)}>
          {gridData[2]}
        </div>
      </div>
      <div className={styles.separator_h}></div>
      <div className={styles.row}>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 3)}>
          {gridData[3]}
        </div>
        <div className={styles.separator_v}></div>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 4)}>
          {gridData[4]}
        </div>
        <div className={styles.separator_v}></div>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 5)}>
          {gridData[5]}
        </div>
      </div>
      <div className={styles.separator_h}></div>
      <div className={styles.row}>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 6)}>
          {gridData[6]}
        </div>
        <div className={styles.separator_v}></div>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 7)}>
          {gridData[7]}
        </div>
        <div className={styles.separator_v}></div>
        <div className={styles.cell} onClick={cellClickHandler.bind(this, 8)}>
          {gridData[8]}
        </div>
      </div>
    </div>
  );
}

export default Grid;
