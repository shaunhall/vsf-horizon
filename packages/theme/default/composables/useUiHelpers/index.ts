
const useUiHelpers = () => {
  const getFacetsFromURL = (queryString: string): any => {
    const filters = decodeURI(queryString);
    const filtersList = filters && filters !== 'undefined' ? filters.split('|') : [];
    const selected = {};
    filtersList.forEach((filter) => {
      const [key, value] = filter.split(':');
      if (selected[key]) {
        if (filter.includes('[') && filter.includes(']')) {
          const rangeArray = value.match(/[0-9]+\.?[0-9]*/g);
          selected[key].push({ from: parseFloat(rangeArray[0]), to: parseFloat(rangeArray[1]) });
        } else {
          selected[key].push({ optionName: value });
        }
      } else if (filter.includes('[') && filter.includes(']')) {
        const rangeArray = value.match(/[0-9]+\.?[0-9]*/g);
        selected[key] = [{ from: parseFloat(rangeArray[0]), to: parseFloat(rangeArray[1]) }];
      } else {
        selected[key] = [{ optionName: value }];
      }
    });
    return selected;
  };

  // eslint-disable-next-line
  const getCatLink = (category): string => {
    console.warn('[VSF] please implement useUiHelpers.getCatLink.');

    return '/';
  };

  // eslint-disable-next-line
  const changeSorting = (sort) => {
    console.warn('[VSF] please implement useUiHelpers.changeSorting.');

    return 'latest';
  };

  // eslint-disable-next-line
  const changeFilters = (filters: Record<string, { [x: string]: any }[]>) => {
    console.warn('[VSF] please implement useUiHelpers.changeFilters.');
    const urlFilters = [];
    Object.entries(filters).forEach(([key, options]) => {
      if (options.length) {
        options.forEach(option => {
          if (option.from || option.to) {
            console.log(`${key}:[${option.from} TO ${option.to}]`);
            urlFilters.push(`${key}:[${option.from} TO ${option.to}]`);
          } else {
            console.log(`${key}:${option.optionName}`);
            urlFilters.push(`${key}:${option.optionName}`);
          }
        });
      }
    });
    console.log(JSON.parse(JSON.stringify(filters)));
    return urlFilters.join('|');
  };

  // eslint-disable-next-line
  const changeItemsPerPage = (itemsPerPage) => {
    console.warn('[VSF] please implement useUiHelpers.changeItemsPerPage.');
  };

  // eslint-disable-next-line
  const setTermForUrl = (term: string) => {
    console.warn('[VSF] please implement useUiHelpers.changeSearchTerm.');
  };

  // eslint-disable-next-line
  const isFacetColor = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetColor.');

    return false;
  };

  // eslint-disable-next-line
  const isFacetCheckbox = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetCheckbox.');

    return false;
  };

  const getSearchTermFromUrl = () => {
    console.warn('[VSF] please implement useUiHelpers.getSearchTermFromUrl.');
  };

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    setTermForUrl,
    isFacetColor,
    isFacetCheckbox,
    getSearchTermFromUrl
  };
};

export default useUiHelpers;
