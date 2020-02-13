import { RouteProps } from 'react-router-dom';

export class ComponentProps {
  children?: React.ReactNode | any;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export class PrivateRouteProps extends ComponentProps {
  path?: string;
}
