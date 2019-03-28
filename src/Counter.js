import React from 'react';

const ErrorComponent = (props) => <div>{props.ignoreProp}</div>

export class Counter extends React.Component {
    constructor(props) {
        console.log("Constructor");
        super(props);

        this.state = {
            counter: 0,
            seed: 0,
            initializing: true
        }

        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    static getDerivedStateFromProps(props, state){
        if(props.seed && state.seed !== props.seed){
            return{
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    // componentWillMount(){
    //     console.log("Component Will Mount");
    //     console.log("-------------------");
    // }

    componentDidMount(){
        console.log("Component Did Mount");
        setTimeout(() => {
            this.setState({initializing: false})    
        }, 500);
        console.log("-------------------");
    }

    // componentWillReceiveProps(nextProps){
    //     console.log("Component Will Receive Props - " + nextProps);
    //     console.log("Component Will Receive Props - " + nextProps.seed);
    //     console.log("-------------------");
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("get Derived State From Props - nextProps = " + nextProps.seed + " - prevState = " + prevState.seed);
        console.log("-------------------");
        return null;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
            console.log("Should Component Update - DO NOT RENDER");
            console.log("Should Component Update - nextProps = " + nextProps.seed + " - this.props = " + this.props.seed + " - nextState = " + nextState.seed);
            console.log("-------------------");
            return false;
        }
        console.log("Should Component Update - RENDER");
        console.log("Should Component Update - nextProps = " + nextProps.seed + " - this.props = " + this.props.seed + " - nextState = " + nextState.seed);
        console.log("-------------------");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Get Snapshot Before Update - prevProps = " + prevProps.seed + " - this.props = " + this.props.seed + " - prevState = " + prevState.seed);
        console.log("-------------------");
        return null;
    }

    componentDidUpdate(){
        console.log("Component Did Update");
        console.log("-------------------");
    }
    
    render() {
        console.log("Render");

        if(this.state.initializing){
            return <div>initializing...</div>
        }

        if(this.props.showErrorComponent && this.state.error){
            return <div>We have encountered an error! {this.state.error.message}</div>
        }

        return <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                {this.props.showErrorComponent ? <ErrorComponent /> : null}
            </div>
    }

    // componentWillUpdate(){
    //     console.log("Component Will Update");
    //     console.log("-------------------");
    // }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update");
        console.log("Component Did Update - prevProps = " + prevProps.seed + " - this.props = " + this.props.seed + " - prevState = " + prevState.seed + " - snapshot = " + snapshot);
        console.log("-------------------");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
        console.log("-------------------");
    }

    componentDidCatch(error, info){
        console.log("Component Did Catch");
        console.log("Component Did Catch - " + error);
        console.log("-------------------");
        this.setState({error, info});
    }
}