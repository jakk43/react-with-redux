import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import "./App.css";
import { bindActionCreators } from "redux";
import { useEffect, useState } from "react";


function App() {
    const account = useSelector((state) => state.account);
    const post = useSelector((state) => state.post);
    // console.log("This is post => " + post);
    // console.log("This is account => " + account);
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, zero, addPost }
        = bindActionCreators(actionCreators, dispatch);

    // const fakePost = {
    //     title: "how to be a bad guy",
    //     message: "go to temple and take money",
    // };

    const [title, setTitle] = useState()
    const [message, setMessage] = useState()


    return (
        <div className="App">
            <h1 className="alert alert-primary"> {account}</h1>
            <button
                className="btn btn-primary ms-3 mt-3 d-inline form-control"
                onClick={() => depositMoney(1000)}
            >
                depositMoney
            </button>
            <button
                className="btn btn-warning ms-3 mt-3 d-inline form-control"
                onClick={() => withdrawMoney(1000)}
            >
                withdrawMoney
            </button>
            <button
                className="btn btn-danger ms-3 mt-3 d-inline form-control"
                onClick={() => zero()}
            >
                Zero
            </button>
            <hr className="display-1"></hr>


            <div className="container">
                <form className="form-control">
                    <input
                        placeholder="Enter title"
                        name="title"
                        className="input-group form-control mt-2"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Enter message"
                        name="message"
                        className="input-group form-control mt-2"
                        onChange={(e) => setMessage(e.target.value)}

                    />
                </form>
                <button
                    className="btn btn-primary ms-3 mt-3 d-inline form-control"
                    onClick={() => addPost({ title, message })}
                >
                    Add post
                </button>
            </div>

            <div className="bg-dark container text-start">
                <p className="text-light">Title : {post.title}</p>
                <p className="text-light">Message : {post.message}</p>
            </div>
        </div>
    );
}

export default App;
