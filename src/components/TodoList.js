import TodoItem from "./TodoItem";
import TodoForm from "./inputcomp/TodoForm"
import React, { useEffect, useState } from "react";

function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskiteam, settaskiteam] = useState([])

    useEffect(()=>{
        let arr = localStorage.getItem("taskiteam")

        if(arr){
            let obj = JSON.parse(arr)
            settaskiteam(obj)
        }
    },[])

    const deleteTask = (index)=>{
        let tempList=taskiteam
        tempList.splice(index,1)
        localStorage.setItem("taskiteam",JSON.stringify(tempList))
        settaskiteam(tempList)
        window.location.reload();

    }
    const updatelistarray=(obj,index)=>{
        let tempList=taskiteam
        tempList[index]=obj
        localStorage.setItem("taskiteam",JSON.stringify(tempList))
        settaskiteam(tempList)
        window.location.reload()


    }


    const toggle = () => {
        setModal(!modal);
    }
    const savetask = (taskObj) => {
        let tempList = taskiteam
        taskiteam.push(taskObj)
        localStorage.setItem("taskiteam",JSON.stringify(tempList))

        settaskiteam(tempList)
        setModal(false)


    }
    return (
        <>
            <div id="btn1">
                <button type="button" class="btn btn-primary" onClick={() => setModal(true)}>Create To Do Iteam</button>
            </div>
            <div className="lists">
                {
                   taskiteam && taskiteam.map((ele,index) => (
                       
                       <TodoItem taskobj={ele} index={index} deleteTask={deleteTask} updatelistarray={updatelistarray}/>
                       
                    ))
                }
            </div>
            <TodoForm toggle={toggle} modal={modal} save={savetask} />
        </>
    )
}

export default TodoList
