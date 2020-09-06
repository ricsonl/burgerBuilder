import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null,
    };

    componentDidMount() {
      axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request
      })
      axios.interceptors.response.use(response => response, error => {
        this.setState({ error: error });
      })
    }

    errorClosedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <>
          <Modal show={this.state.error} toggleModal={this.errorClosedHandler}>
            <p style={{textAlign: 'center'}}>{this.state.error && this.state.error.message}</p>
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
}

export default withErrorHandler;