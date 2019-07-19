import React, {Component} from 'react';
import './App.css';


type TypeProps = {
   str: string,
    num?: number,
    ary: Array<number>
}

type TypeState = {
    message: string
}

type FuncProps = {
    str: string,
    children: number
}
 export const funcComp = (props:FuncProps) => {
    return (<div>{props.str}</div>);
 }


class Test extends Component<TypeProps, TypeState> {

    state = {
        message: 'mytext'
    }

    static defaultProps = {
        str: 'techsitcj'
    }
    h1: ?HTMLHeadingElement;

    render() {
        return (
            <div className="App">
                <h1>{this.props.str}</h1>
                <h1>{this.props.num}</h1>
                <h1>{this.props.ary.map(num => num)}</h1>
                <h1 ref={h1 => this.h1 = h1}>{this.state.message}</h1>
            </div>
        );
    }
}

class App extends Component<{}> {
    render() {
        return (
            <div className="App">
                <Test ary={[1, 2, 3, 4]}/>
                <funcComp str={'fdsdfa'}/>
            </div>
        );
    }
}

export default App;
