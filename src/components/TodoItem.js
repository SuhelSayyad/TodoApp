import './todoitem.css'
import UpdateForm from './inputcomp/UpdateForm';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faTrash, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
function TodoItem({ taskobj, index, deleteTask, updatelistarray }) {
    const [modal, setModal] = useState(false);
    const [check, setcheck] = useState("false");
    const handledelete = () => {
        deleteTask(index);

    }
    const handlecheck = () => {
        setcheck("true")
        if (check == "true") {
            alert("You have completed the Task");
        }
    }
    const toggle = () => {
        setModal(!modal);
    }
    const updateiteam = (obj) => {
        updatelistarray(obj, index)

    }
    return (
        <>

            <div className="card" >
                <div className='btn2'>
                    <FontAwesomeIcon className='icons' icon={faClipboardCheck} onClick={handlecheck} />

                    <FontAwesomeIcon className='icons' icon={faTrash} onClick={handledelete} />

                    <FontAwesomeIcon className='icons' icon={faUserPen} onClick={() => setModal(true)} />
                </div>
                <div className="card-header">
                    {taskobj.Name}
                </div>
                <div class="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{taskobj.Description}</p>

                    </blockquote>
                </div>
            </div>
            <UpdateForm modal={modal} toggle={toggle} updateiteam={updateiteam} taskobj={taskobj} />

        </>
    )
}

export default TodoItem
