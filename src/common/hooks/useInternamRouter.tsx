import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export function useInternalRouter() {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push<T>(path: RoutePath, state?: T) {
        navigate(path, { state });
      },
      replace(path: RoutePath) {
        navigate(path, { replace: true });
      },
    };
  }, [navigate]);
}

type RoutePath = `/${string}`;
