import React, { useState } from 'react';
import Button from './Button'
import styles from './Configurator.module.css'
import Header from './Header'
const Configurator = () => {
    const [row,setRowNum] = useState(4)
    const setRow = (e) =>{
        e.stopPropagation()
        setRowNum(e.target.valueAsNumber)
    }
    const [column,setColumnNum] = useState(4)
    const setColumn = (e) =>{
        e.stopPropagation()
        setColumnNum(e.target.valueAsNumber)
    }
    const [obs,setObsNum] = useState(2)
    const setObs = (e) =>{
        e.stopPropagation()
        setObsNum(e.target.valueAsNumber)
    }
    return <React.Fragment>
        <div className={styles["wrapper"]}>
        <section className={styles["configurator"]}>
            <Header content="Grid Creation"/>
            <div className={styles["input-range"]}>
                <label htmlFor="row">Number of rows: {row}</label><br/>
                <input id="row" type="range" defaultValue="4" min="1" max="10" onChange={setRow}></input>
                <div className={styles["range-minmax"]}>
                <span>1</span><span>10</span>
                </div>
            </div>
            <div className={styles["input-range"]}>
            <label htmlFor="col">Number of columns: {column}</label><br/>
                <input id="col" type="range" defaultValue="4" min="1" max="10" onChange={setColumn}></input>
                <div className={styles["range-minmax"]}>
                <span>1</span><span>10</span>
                </div>
            </div>
            <div className={styles["input-range"]}>
            <label htmlFor="obs">Number of obstructions: {obs}</label><br/>
                <input id="obs" type="range" defaultValue="2" min="1" max="10" onChange={setObs}></input>
                <div className={styles["range-minmax"]}>
                <span>1</span><span>10</span>
                </div>
            </div>
            <Button content="Next" path="/simulator"/>
        </section>
        </div>
    </React.Fragment>
}
export default Configurator;