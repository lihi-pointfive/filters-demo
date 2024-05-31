import { useState, useEffect } from 'react';

type QueryParams = Record<string, string>;

export const useURLSearchParams = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({});

  useEffect(() => {
    const parseSearchParams = (): QueryParams => {
      const search = window.location.hash.split('?')[1];
      const searchParams = new URLSearchParams(search);
      const params: QueryParams = {};
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
      return params;
    };

    const handlePopState = () => {
      setQueryParams(parseSearchParams());
    };
    window.addEventListener('popstate', handlePopState);

    setQueryParams(parseSearchParams());

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const updateSearchParams = (params: QueryParams) => {
    const searchParams = new URLSearchParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        searchParams.set(key, params[key]);
      }
    }
    const hash = window.location.hash.split('?')[0];
    const newUrl = `${window.location.pathname}${hash}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setQueryParams(params);
  };

  return [queryParams, updateSearchParams] as const;
};
