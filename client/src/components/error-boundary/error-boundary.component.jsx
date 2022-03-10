import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        // process the error
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasError)
            return <ErrorImageOverlay><ErrorImageContainer imageUrl="/error-img.png" /><ErrorImageText>Whoops... Someone has spilt the milk!</ErrorImageText></ErrorImageOverlay>
        return this.props.children;
    }
}

export default ErrorBoundary;