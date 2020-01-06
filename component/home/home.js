import React, { Component } from "react";

import  {database} from "../firebase";

class Home extends Component
{

    constructor()
    {
        super();
        this.state =
        {
            title:"",
            description:""
        };
    };

    handleChange= e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleForm = e=>{
        e.preventDefault();
        let data ={
            title: this.state.title,
            description: this.state.description
        };
        console.log(data);
        database.push(data);
        this.setState({title:"", description:""})
    }

    render()
    {
        console.log(this.state.title, this.state.description);
        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">

                        <h1>User_Form :</h1>

                        <form onSubmit={this.handleForm}>
                            <div className="form-group">
                                <input type="text" placeholder="Enter Your Title" name="title"
                                        className="form-control" value={this.state.title}
                                        onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <textarea type="text" placeholder="Enter Description" name="description"
                                        className="form-control"  value={this.state.description}
                                        onChange={this.handleChange}
                                   />
                            </div>

                            <button type="submit" class="btn btn-outline-danger">submit</button>


                        </form>

                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
