import React from 'react';
 
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        this.setState({
            count: 1
        })
    }
    increment() {
        this.state.count = this.state.count + 1
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>click</button>
                <p>{this.state.count}</p>
      
}

const Counter = () => {
    const [count, setCount] = useState(1);

    const counterIncre = () => {
        setCount(count++);
    }

useEffect(()=>{
    get()
},[])
    return (
         <div>
                <button onClick={counterIncre}>click</button>
                <p>{this.state.count}</p>
        </div>
    )
}
