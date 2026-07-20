import { Component, type ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center px-6 py-24">
          <p className="text-[13px] uppercase tracking-[0.08em] text-[#b8a08a] font-sans font-medium mb-4">
            Something went wrong
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6 text-center">
            Oops, we hit a snag
          </h1>
          <p className="text-lg text-[#666666] font-sans mb-10 max-w-md text-center leading-relaxed">
            Don't worry — it's not you, it's us. Try refreshing the page or heading back home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#1a1a1a] text-[#faf8f5] text-sm font-sans font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-300"
            >
              Refresh Page
            </button>
            <Link
              to="/"
              className="border border-[#1a1a1a] text-[#1a1a1a] text-sm font-sans font-medium uppercase tracking-wide px-8 py-3 rounded-full hover:bg-[#1a1a1a] hover:text-[#faf8f5] transition-all duration-300 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
