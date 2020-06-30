import React, { lazy, Suspense } from "react";

import {BrowserRouter as Router , Route, Switch } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary/error-boundary.component";
import Header from "./Header/Header";
import Spinner from "./Spinner/spinner.component";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ServiesPage = lazy(() => import("../pages/ServiesPage"));

const App = () => {
  return (
    <div>
      
      <Router>
      <Header />
      <Switch>
    
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/AboutPage" component={AboutPage} />
            <Route exact path="/ServiesPage" component={ServiesPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
