import {useState} from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="col-4">
      <div className="card m-3">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>

  );
}

export default Todo;
