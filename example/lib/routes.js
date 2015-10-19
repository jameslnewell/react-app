import Home from './pages/Home';
import About from './pages/About';

export default [
  <Route name="home" pattern="/" component={Home}/>,
  <Route name="about" pattern="/about" component={About}/>
]
