import React from "react";

class Profile extends React.Component {
  //extends isliye laga rahe taki ye normal javacript class nahin ho balki react component class ho

  constructor(props) {
    //constructor is a method of react component class
    super(props); //super is used to call the constructor of parent class
    this.state = {
      count: 0,
      count2: 0,
      gitObj: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ashok0022");
    const json = await data.json();
    this.setState({ gitObj: json });
    console.log(json);
  }

  render() {
    //render is a method of react component class which returns the jsx
    return (
      <div>
        <img src={this.state.gitObj.avatar_url} alt="profile pic" />
        <h1>Profile class component</h1>
        <h2> Name: {this.state.gitObj.name}</h2>
        <h2>Location: {this.state.gitObj.location}</h2>
        <h2>Bio: {this.state.gitObj.bio}</h2>
        <h2>Public Repos: {this.state.gitObj.public_repos}</h2>
        <h2>Followers: {this.state.gitObj.followers}</h2>
      </div>
    );
  }
}
export default Profile;
