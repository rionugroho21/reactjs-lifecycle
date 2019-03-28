import React from 'react';
import {Counter} from './Counter';
import './style.css';

class App extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         mount: true,
         ignoreProps: 0,
         seed: 40,
         showErrorComponent: false
      }

      this.mountCounter = () => this.setState({mount: true});
      this.unmountCounter = () => this.setState({mount: false});

      this.ignoreProps = () => this.setState({ignoreProps: Math.random()});
      this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)});
      this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent});
   }

   render() {
      return <div>
            <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
            <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
            <button onClick={this.ignoreProps}>Ignore Props</button>
            <button onClick={this.seedGenerator}>Generator Seed</button>
            <button onClick={this.toggleError}>Toggle Error</button>
            {this.state.mount ? 
               <Counter 
                  ignoreProps={this.state.ignoreProps}
                  seed={this.state.seed}
                  showErrorComponent={this.state.showErrorComponent}
               /> : 
               null}
         </div>
   }
}

export default App;