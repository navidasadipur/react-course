function Modal() {
  return (
    <div className="fixed-top top-50 d-flex justify-content-center align-items-center">
    <div className="card p-3 ">
      <p>Are you sure?</p>
      <div className="d-flex justify-content-around">
      <button className="btn btn-success">Cancle</button>
      <button className="btn btn-danger">Confirm</button>
      </div>
    </div>
    </div>
  );
}

export default Modal;
