import React from 'react'

/*function HelloWorld(props) {
    return (
        <h1>
            Hello Mohammed {props.name}
        </h1>
    )
}*/

class HelloWorld extends React.Component {
    render() {
        return (
        <h1 className ="apphello">Hello Mohammed {this.props.name} </h1>
        )
    }
}

export default HelloWorld;


