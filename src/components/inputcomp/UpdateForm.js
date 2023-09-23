import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useEffect, useState } from 'react';
function UpdateForm({ modal, toggle,updateiteam,taskobj }) {

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
    const handleupdate=(e)=>{
        e.preventDefault();
        let tempObj={}
        tempObj["Name"]=title
        tempObj["Description"]=description
        updateiteam(tempObj)

    }
    useEffect(()=>{
        settitle(taskobj.Name);
        setdescription(taskobj.Description)

    },[])
   

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <input name='title' placeholder='Add Your Title' onChange={handelChange} value={title} type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <textarea name='description' placeholder='Add Description..' onChange={handelChange} value={description} rows='5' className='form-control' />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleupdate}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </>
    )
}

export default UpdateForm
