import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteNav from "./components/SiteNav";
import HobbyBorders from "./components/HobbyBorders";
import Home from "./pages/Home";
import WorkPiqsal from "./pages/WorkPiqsal";
import WorkVanguard from "./pages/WorkVanguard";
import FunProjects from "./pages/FunProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNav />
      <HobbyBorders />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-mark">MP<span>✦</span></span>
          <span>Built with curiosity, CSS & too many tabs.</span>
          <span>© {new Date().getFullYear()} Mugdha Prabhu</span>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work/piqsal" component={WorkPiqsal} />
      <Route path="/work/vanguard" component={WorkVanguard} />
      <Route path="/fun-projects" component={FunProjects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Shell>
        <Router />
      </Shell>
    </ErrorBoundary>
  );
}
