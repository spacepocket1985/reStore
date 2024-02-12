import { Component, ReactNode } from 'react';
import { ErrorIndicator } from '../errorIndicator/ErrorIndicator';
import './ErrorBoundary.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: string;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: '',
  };

  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
      error: error.toString(),
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="boundary-wrapper">
          <ErrorIndicator errorMsg={this.state.error.toString()} />
          <h4>[ErrorBoundary is working]</h4>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
