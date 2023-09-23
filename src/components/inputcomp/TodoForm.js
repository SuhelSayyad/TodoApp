import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function TodoForm({ modal, toggle,save }) {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState('')
    const handelChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'title') {
            settitle(value)

        }
        else {
            setdescription(value);
        }
    }
    const handlesave=(e)=>{
        e.preventDefault();
        let taskObj={}
        taskObj["Name"]=title
        taskObj["Description"]=description
        taskObj["status"]=false
        save(taskObj)
        settitle("")
        setdescription("")
        


    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <input id='inputbox' name='title' placeholder='Add Your Title' onChange={handelChange} value={title} type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <textarea id='desbox' name='description' placeholder='Add Description..' onChange={handelChange} value={description} rows='5' className='form-control' />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handlesave}>
                        Add Task
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    )
}

export default TodoForm
