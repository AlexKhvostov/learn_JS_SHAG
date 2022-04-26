import React from 'react';

class TestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeAction: false,
            firstNum: 0,
            secondNum: 0,
            res: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.play = this.play.bind(this);

    }

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    play(event) {
        event.preventDefault();
        console.log(Number.parseInt(this.firstNum));
        console.log(Number.parseInt(this.secondNum));

        if(this.state.typeAction){
            this.setState({
                res: Number.parseInt(this.state.firstNum) + Number.parseInt(this.state.secondNum)
            } );
        }else {
            this.setState({
                res: Number.parseInt(this.state.firstNum) - Number.parseInt(this.state.secondNum)
            } );
        }
    }


    render() {
        return (
            <form>

                <label>
                    Первое число:
                    <input
                        name="firstNum"
                        type="number"
                        value={this.state.firstNum}
                        onChange={this.handleInputChange}
                    /><br/>
                </label>
                <label>
                    Второе число:
                    <input
                        name="secondNum"
                        type="number"
                        value={this.state.secondNum}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br/>

                <label>
                    + / -:
                    <input
                        name="typeAction"
                        type="checkbox"
                        checked={this.state.typeAction}
                        onChange={this.handleInputChange}

                    />
                </label>
                <br/>
                <label>

                    <button
                        name='go'
                        onClick={this.play}

                    >замутить
                    </button>
                </label>
                <label>
                    <br/>
                </label>
                <label>
                    итог:
                    <p name="res">{this.state.res}</p>
                </label>



            </form>
        );
    }
}

export default TestForm;