import { useState, createContext, useContext } from "react";

// Router Context with state management
const RouterContext = createContext({
  currentPath: "/",
  navigate: (path: string, state?: any) => {},
  params: {} as Record<string, string>,
  state: null as any
});

export const useRouter = () => useContext(RouterContext);

export const Router = ({ children }: { children: React.ReactNode }) => {
  const [currentPath, setCurrentPath] = useState("/");
  const [params, setParams] = useState<Record<string, string>>({});
  const [state, setState] = useState<any>(null);

  const navigate = (path: string, navigationState?: any) => {
    setCurrentPath(path);
    
    // Store any state passed during navigation
    if (navigationState) {
      setState(navigationState);
    } else {
      setState(null);
    }
    
    // Parse params if path contains dynamic segments
    const paramMatch = path.match(/\/product\/(.+)/);
    if (paramMatch) {
      setParams({ id: paramMatch[1] });
    } else {
      setParams({});
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params, state }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Routes = ({ children }: { children: React.ReactNode }) => {
  const { currentPath } = useRouter();
  
  const routes = Array.isArray(children) ? children : [children];
  
  for (const route of routes) {
    if (!route || !route.props) continue;
    
    const { path } = route.props;
    
    // Exact match
    if (path === currentPath) {
      return route.props.element;
    }
    
    // Dynamic route match (e.g., /product/:id)
    if (path.includes(":")) {
      const pathPattern = path.replace(/:\w+/g, "([^/]+)");
      const regex = new RegExp(`^${pathPattern}$`);
      if (regex.test(currentPath)) {
        return route.props.element;
      }
    }
  }
  
  return null;
};

export const Route = ({ path, element }: { path: string; element: React.ReactNode }) => {
  return null;
};

export const Link = ({ 
  to, 
  children, 
  className = "",
  state 
}: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  state?: any;
}) => {
  const { navigate } = useRouter();
  
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to, state);
      }}
    >
      {children}
    </a>
  );
};
