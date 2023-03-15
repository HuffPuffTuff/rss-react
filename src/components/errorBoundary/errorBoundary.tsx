import React, { Component, ErrorInfo, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

interface IState {
  error: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  state = {
    error: false,
  };

  componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  };

  render() {
    if (this.state.error) {
      return <h1>Something went wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
