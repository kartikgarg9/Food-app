import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + "child Constructor");
  }

  async componentDidMount() {
    //console.log("Child Component Did Mount");
    //Api Call
    const data = await fetch("https://api.github.com/users/kartikgarg9");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    //console.log("Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location:{location}</h3>
        <h3>Login:{login}</h3>
        <h4>Contact: @kartik9</h4>
      </div>
    );
  }
}

export default UserClass;
