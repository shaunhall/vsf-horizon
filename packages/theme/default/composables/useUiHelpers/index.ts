
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

  const _isValidHttpUrl = (link: string): boolean => {

    let url;

    try {
      url = new URL(link);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  };

  const convertLink = (oldLink: string): string => {
    if (!oldLink) {
      return '';
    }
    if (_isValidHttpUrl(oldLink)) {
      return oldLink;
    }
    let link = oldLink;

    const linkArray = link.split('?');
    const newLink = (linkArray[0][0] === '/') ? linkArray[0] : '/' + linkArray[0];

    if (link.includes('.list')) {
      link = `/c${newLink}/`;
      link = link.replace('.list', '');
    } else if (link.includes('.html')) {
      link = `/p${newLink}/`;
      link = link.replace('.html', '');
    } else if (link.includes('.search')) {
      link = '/search/';
    } else {
      link = linkArray[0];
    }

    if (linkArray.length > 1) {
      const linkQuery = `?${linkArray[1]}`;
      link = link + linkQuery;
    }

    if (link.includes('?search')) {
      link = link.replace('?search', '?q');
    }

    return link;
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
    getSearchTermFromUrl,
    convertLink
  };
};

export default useUiHelpers;
