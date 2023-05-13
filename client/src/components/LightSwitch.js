import React from 'react';

class LightSwitch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            on: props.on
        }

        this.handleOnOff = this.handleOnOff.bind(this);
    }

    handleOnOff() {
        this.setState({
            on: !this.state.on
        });
    }

    render() {
        return <div>
            <div className={`light-switch ${this.state.on ? 'light-switch-on' : ''}`} onClick={(e) => {
                e.preventDefault();
                this.handleOnOff()
            }}>
                <div className={`light-switch-slider`}>
                </div>
            </div>
            <input name={this.props.name} className={`light-switch-checkbox`} type={`checkbox`} checked={this.state.on}  />
        </div>
    }
}

export default LightSwitch;
