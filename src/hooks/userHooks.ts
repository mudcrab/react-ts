import React, { useEffect, useState } from 'react';

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => setIsAuthenticated(!!localStorage.getItem('token')), []);

  return isAuthenticated;
}
