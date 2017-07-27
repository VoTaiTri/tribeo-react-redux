import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

// Render class Hello ở trên vào vị trí có id là root đã được khai báo trong file index.html
ReactDOM.render(<Hello />, document.getElementById("root"));
