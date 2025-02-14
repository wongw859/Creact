import React, { useEffect, useState } from "react";
import CollabTaskListItem from "./CollabTaskListItem";
import styles from "./CollabTaskList.module.css";
import Pagination from "./Pagination";

const CollabTaskList = (props) => {
  return (
    <div className={styles.box}>
      <h1>Task Lists</h1>
      <div className={styles.tasks}>
        {props.tasks.map((task, index) => {
          return (
            <CollabTaskListItem
              key={task.id}
              id={task.id}
              handleDelete={props.handleDelete}
              task={task}
            />
          );
        })}
      </div>
      <Pagination
        tasksPerPage={props.tasksPerPage}
        totalTasks={props.totalTasks}
        paginate={props.paginate}
      />
    </div>
  );
};

export default CollabTaskList;
