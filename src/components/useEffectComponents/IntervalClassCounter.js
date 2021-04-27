import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return (
            <div className="text-center mt-5">
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
