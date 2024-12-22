import React from  "react";
import ReactDOM from "react-dom/client"

const ele= React.createElement(
    "div",
    {className:"title " },
    React.createElement("h1",null,"Heading 1"),
    React.createElement("h2",null,"Heading 1"),
    React.createElement("h3",null,"Heading 1"),
);

const htmlRoot=document.getElementById("root");
const rootReact=ReactDOM.createRoot(htmlRoot);
rootReact.render(ele);

var ele1= (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

//var htmlRoot1=document.getElementById("root");
//var rootReact1=ReactDOM.createRoot(htmlRoot);
rootReact.render(ele1);

function TitleComponent () {
    return (
    <div className="title">
        <h1>Heading 4</h1>
        <h2>Heading 5</h2>
        <h3>Heading 6</h3>
    </div>
);
}

//var htmlRoot1=document.getElementById("root");
//var rootReact1=ReactDOM.createRoot(htmlRoot);
rootReact.render(<TitleComponent/>);

function TitleComponnetTags( {id,style}) {
    return (
        <div className="title" id={id} style={style}>
            <h1 style={{color:"red"}}>Heading 7</h1>
            <h2>Heading 8</h2>
            <h3>Heading 9</h3>
        </div>
    );
}

rootReact.render(<TitleComponnetTags  id="main-title"  style={{ fontFamily: "Arial" }} />

)

function Heading1(){
    return <h4>Subheading inside Heading</h4>
}

function Heading2() {
    return (
        <div className="title">
            <h1>Heading1</h1>
            <h1>Heading1</h1>
            <h1>Heading1</h1>
            <Heading1/>
        </div>
    );
}
rootReact.render(<Heading2/>)