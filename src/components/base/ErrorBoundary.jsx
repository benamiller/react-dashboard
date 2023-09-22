import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col w-3/4 rounded-2xl shadow-xl py-2 m-auto my-4">
          <section className=" p-12 w-3/4 m-auto text-center text-red-600 ">
            <h2 role="alert" className="my-4">
              Sorry! There is an error with our server.
            </h2>
            <p>
              The issue should be fixed soon.
              <br />
              Please contact your IT representative if you have any questions.
            </p>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
