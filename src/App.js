import './App.css';
import Home from './components/pages/Home';
import SuperHeroes from './components/pages/SuperHeroes';
import { ReactQueryDevtools } from 'react-query/devtools';
import RQSuperHeroes from './components/pages/RQSuperHeroes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <SuperHeroes />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
