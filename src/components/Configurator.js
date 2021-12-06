import React, { useState } from 'react';
import Button from './Button'
import styles from './Configurator.module.css'
const Configurator = (props) => {
    const [row,setRowNum] = useState(1)
    const setRow = (e) =>{
        e.stopPropagation()
        setRowNum(e.target.valueAsNumber)
    }
    const [column,setColumnNum] = useState(1)
    const setColumn = (e) =>{
        e.stopPropagation()
        setColumnNum(e.target.valueAsNumber)
    }
    const [obs,setObsNum] = useState(1)
    const setObs = (e) =>{
        e.stopPropagation()
        setObsNum(e.target.valueAsNumber)
    }
    return <React.Fragment>
        <div className={styles["wrapper"]}>
        <section className={styles["configurator"]}>
            <h1>Waterflow simulator</h1><br/>
            <h2>Grid Creation</h2>
            <div className={styles["input-range"]}>
                <label htmlFor="row">Number of rows: {row}</label><br/>
                <input id="row" type="range" defaultValue="1" min="1" max="10" onChange={setRow}></input>
                <div className={styles["range-minmax"]}>
                <span>1</span><span>10</span>
                </div>
            </div>
            <div className={styles["input-range"]}>
            <label htmlFor="col">Number of columns: {column}</label><br/>
                <input id="col" type="range" defaultValue="1" min="1" max="10" onChange={setColumn}></input>
                <div className={styles["range-minmax"]}>
                <span>1</span><span>10</span>
                </div>
            </div>
            <div className={styles["input-range"]}>
            <label htmlFor="obs">Number of obstructions: {obs}</label><br/>
                <input id="obs" type="range" defaultValue="1" min="1" max="10" onChange={setObs}></input>
                <div className={styles["range-minmax"]}>
                <span>1</span><span>10</span>
                </div>
            </div>
            <Button content="Next"/>
        </section>
        </div>
    </React.Fragment>
}
export default Configurator;