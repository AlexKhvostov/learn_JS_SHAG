import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            link: "",
            linkEnd:"",
            textError:"",

            isError:0


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

    play(event){
        event.preventDefault();
        this.setState({
            linkEnd : this.state.link
        } );
    }

    imgError(event){
        event.preventDefault();

        this.setState({
            textError : "Ошибка при загрузке сообщения"
        } );

    }


    render() {
        return (
            <form>

                <label>
                    Второе число:
                    <input
                        name="link"
                        type="text"
                        value={this.state.link}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br/>

                <label>
                    <input
                        type='submit'
                        onClick={this.play}
                        value="замутить"
                    />
                </label>
                <br/>

                <label>
                    итог:
                    <div>
                        <img src="{this.stage.linkEnd}"  onError={this.imgError}/>
                            <p>{this.stage.textError}</p>

                     </div>
                </label>



            </form>
        );
    }
}

export default Image;