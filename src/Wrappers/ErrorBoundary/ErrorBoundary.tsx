import { Button } from 'Components';
import { Component } from 'react';
import { Box, Page } from 'Wrappers';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /* update state -> next render will show the fallback UI. */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Page>
          <h1>Oooups.</h1>
          <Box>
            <h2>Error? Really sorry for that! Try to reload this page please.</h2>
            <Button onClick={() => this.setState({ hasError: false })} color="peach" type="button">
              Reload
            </Button>
          </Box>
        </Page>
      );
    }

    return this.props.children;
  }
}
