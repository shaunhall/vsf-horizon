import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('CONFIRMATION', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Does not match'
});

extend('MAX_LENGTH', {
  params: ['limit'],
  validate: (value, { limit }) => value.length <= limit,
  message: (_, { limit }) => `${limit} character${Number.parseInt(limit) === 1 ? '' : 's'} maximum`
});

extend('MIN_LENGTH', {
  params: ['limit'],
  validate: (value, { limit }) => value.length >= limit,
  message: (_, { limit }) => `${limit} character${Number.parseInt(limit) === 1 ? '' : 's'} minimum`
});

extend('MIN_VALUE', {
  params: ['limit'],
  validate: (value, { limit }) => value >= limit,
  message: (_, { limit }) => `Minimum of ${limit}`
});

extend('MAX_VALUE', {
  params: ['limit'],
  validate: (value, { limit }) => value <= limit,
  message: (_, { limit }) => `Maximum of ${limit}`
});

extend('MIN_UPPERCASE', {
  params: ['limit'],
  validate: (value, { limit }) => (value.match(/[A-Z]/g) || []).length >= limit,
  message: (_, { limit }) => `${limit} uppercase character${Number.parseInt(limit) === 1 ? '' : 's'}`
});

extend('NOT_EQUAL_TO', {
  params: ['limit'],
  validate: (value, { limit }) => value !== limit,
  message: 'Must Not Match'
});

extend('REGEX_MATCHES', {
  params: ['rgx'],
  validate: (value, { rgx }) => value.match(RegExp(rgx)),
  message: 'Invalid Format'
});

extend('NO_SPECIAL_CHARACTERS', {
  validate: value => !value.match(/[^a-zA-Z0-9 ]/),
  message: 'No special characters'
});

extend('NO_DIGITS', {
  validate: value => !value.match(/[0-9]/),
  message: 'No numbers'
});

extend('MIN_LOWERCASE', {
  params: ['limit'],
  validate: (value, { limit }) => (value.match(/[a-z]/g) || []).length >= limit,
  message: (_, { limit }) => `${limit} lowercase character${Number.parseInt(limit) === 1 ? '' : 's'}`
});

extend('MIN_NUMBERS', {
  params: ['limit'],
  validate: (value, { limit }) => (value.match(/[0-9]/g) || []).length >= limit,
  message: (_, { limit }) => `${limit} number${Number.parseInt(limit) === 1 ? '' : 's'}`
});

extend('MIN_SPECIAL_CHARACTERS', {
  params: ['limit'],
  validate: (value, { limit }) => (value.match(/[^a-zA-Z0-9]/g) || []).length >= limit,
  message: (_, { limit }) => `${limit} special character${Number.parseInt(limit) === 1 ? '' : 's'}`
});
