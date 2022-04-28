import React from "react";


export default class GridDiv extends React.Component {
    constructor(props) {
        super(props);
        this.row = this.props.row;
        this.col = this.props.col;

        this.state={
            className : this.props.className
        };
        this.paint = this.paint.bind(this);

    }

    paint(){
        this.props.paint(this.row , this.col);
    }

    render() {
        return (<div onClick={this.paint} className={this.state.className}> {this.state.className} </div>)
    }


}