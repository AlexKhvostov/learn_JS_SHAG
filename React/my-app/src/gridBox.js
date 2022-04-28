import React from "react";
import GridDiv from "./gridDiv";

export default class GridBox extends React.Component {
    constructor(props) {
        super(props);
        this.row = this.props.row;
        this.col = this.props.col;
        this.rowArr = [];

        for (let i = 0; i < this.row; i++) {
            let col = [];
            for (let j = 0; j < this.col; j++) {
                col.push('gray');
            }
            this.rowArr.push(col);
        }
        // console.log(this.rowArr);

        this.state = {
            color: this.rowArr
        };
        // console.log(this.state.color);
        this.box = this.box.bind(this);
    }

    box(r, c) {

        let maxR = (r + 1 <= this.row) ? r + 1 : this.row;
        let minR = (r - 1 > 0) ? r - 1 : 0;
        let maxC = (c + 1 <= this.col) ? c + 1 : this.col;
        let minC = (c - 1 > 0) ? c - 1 : 0;

        let newColorsArr = Array.from(this.state.color);
        // for (let i = 0; i < this.row; i++) {
        //     let col = [];
        //     for (let j = 0; j < this.col; j++) {
        //         col.push('gray');
        //     }
        //     newColorsArr.push(col);
        // }
        newColorsArr[r][c] = "red";


        // this.setState({color:newColorsArr});
        this.setState({
            color: this.state.color.map((row, ri) => row.map((col, ci) => col = ((ri <= maxR) && (ri >= minR) && (ci >= minC) && (ci <= maxC)) ? "red" : "grey"))
        });


        console.log(r + " " + c);
        console.log(this.state);
        console.log(this.state.color[r][c]);
    }

    render() {
        let classNameBox = 'classNameBox';
        return (
            <React.Fragment>
                <div className={classNameBox}>

                    {this.state.color.map((row, r) => row.map((col, c) => <GridDiv key={r + "-" + c}
                                                                                   row={r}
                                                                                   col={c}
                                                                                   paint={this.box}
                                                                                   className={this.state.color[r][c]}/>))}
                </div>
            </React.Fragment>

        );
    }


}