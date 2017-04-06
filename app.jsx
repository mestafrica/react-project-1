class Message extends React.Component{
    render(){
        return(
            <div>
                <h1>New Title: {this.props.title}</h1>
                <p>New Message: {this.props.message}</p>
                <p>New Age: {this.props.age}</p>
            </div>
        );
    }
}

class MessageInput extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let title = this.refs.title.value;
        let message = this.refs.message.value;
        let age = this.refs.age.value;

        let newObject = {
            title,
            message,
            age
        };

        if (title.length > 0 && message.length > 0 && age.length > 0) {
            this.props.newValue(newObject);
        } else {
            alert("please fill all the inputs");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Title here"/><br />
                <input type="text" ref="message" placeholder="Message here"/><br />
                <input type="text" ref="age" placeholder="Age here"/><br />
                <hr />
                <button>Submit</button>
            </form>
        );
    }
}

class Greeter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "new title",
            message: "new Message",
            age: 0
        };

        this.updateNewValue = this.updateNewValue.bind(this);
    }

   updateNewValue(obj) {
        this.setState(obj);
   }

    render() {
        return (
            <div>
                <Message title={this.state.title} message={this.state.message} age={this.state.age}/>
                <br/>
                <MessageInput newValue={this.updateNewValue}/>
            </div>
        );
    }
}

Greeter.defaultProps = {
    title: "default Title",
    message: "default Message",
    age: 0
};

ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);