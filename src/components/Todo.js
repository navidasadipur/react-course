function Todo(props) {

    function deleteHandler(){
        console.log("delete clicked");
    }

  return (
    <div className="card m-3">
      <h2 className="card-title">{props.title}</h2>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
