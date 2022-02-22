const BASE_URL = 'https://restcountries.com/v2/'

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = BASE_URL + 'name/';

export const filterByCode =  BASE_URL + 'alpha?codes=';
