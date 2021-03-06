import React, { Component } from 'react';

const asyncComponent = (importCompoennet) => {
    return class extends Component{
        state = {
            component: null
        }

        componentDidMount() {
            importCompoennet()
                .then(cmp => {
                    this.setState({ component: cmp.default });
                
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C{...this.props} /> : null;
        }
    }
}

export default asyncComponent;