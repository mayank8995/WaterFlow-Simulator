import React, { useState } from 'react';
import styles from './Simulator.module.css'
import Header from './Header'
const Simulator = (props) =>{
    const [state, setState] = useState({
        todos: [
            {
              id: 1,
            },
            {
              id: 2,
            },
            {
              id: 3,
            }
          ],
          completedTasks: [],
          draggedTask: {}
    })
    function dragOver(event){
        event.preventDefault();
    }
    function startDrag(event,item){
        console.log("onDragStart ev>>>>",event)
        event.stopPropagation();
        const { completedTasks, todos } = state;
        setState({
            todos:todos,
            completedTasks:completedTasks,
            draggedTask:item
        })
        console.log("state>>>",state)
    }
    function drop(event){
        const { completedTasks, draggedTask, todos } = state;
        console.log(completedTasks,"  ",draggedTask," ",todos,"  ", [...completedTasks, draggedTask])
    setState({
      completedTasks: [...completedTasks, draggedTask],
      todos: todos.filter(task => task.id !== draggedTask.id),
      draggedTask: {},
    })
    }
return <React.Fragment>
        <div className={styles["wrapper"]}>
        <section className={styles["configurator"]}>
            <Header content="Drag the obstruction and place it inside grid"/>
            <div className={styles["main"]}>
            <div className={styles["grid-container"]} onDrop={event => drop(event)}
          onDragOver={(event => dragOver(event))}>
              {state?.completedTasks?.map((task,index) =>  <div key={task.id} className={styles["grid-item"]}>{task.id}</div>)}
            </div>
            <div className={styles["obstruction"]}>
                {state?.todos?.map((item) => <div style={{margin:"2px"}} draggable onDrag={(e)=> startDrag(e,item)} key={item.id} data-item={item.id}></div>)}
            </div>
            </div>
        </section>
        </div>
    </React.Fragment>
}

export default Simulator;