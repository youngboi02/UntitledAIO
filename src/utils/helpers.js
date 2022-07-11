export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const dateFormat = (value) =>
  value ? new Date(value).toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris' }) : null;

export const timeFormat = (value) =>
  value
    ? new Date(value).toLocaleTimeString('fr-FR', { timeZone: 'Europe/Paris', timeStyle: 'short' })
    : null;

export const completeDateFormat = (value) =>
  value
    ? new Date(value).toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        timeStyle: 'short',
        dateStyle: 'short',
      })
    : null;

export const currencyFormat = (value) =>
  value
    ? new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 2,
      })
        .format(value.toString().replaceAll(',', '.'))
        .toString()
        .replaceAll('.', ',')
    : null;

export const decimalFormat = (value) =>
  value
    ? new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2 }).format(
        value.replaceAll(',', '.')
      )
    : null;

export const convertStringIntoNumber = (value) =>
  value ? Number(value.replaceAll(',', '.')) : null;

export const isNumber = (value) => /^[0-9.,]+$/.test(value);

export const parseLocaleNumber = (stringNumber, locale) => {
  var thousandSeparator = Intl.NumberFormat(locale)
    .format(11111)
    .replace(/\p{Number}/gu, '');
  var decimalSeparator = Intl.NumberFormat(locale)
    .format(1.1)
    .replace(/\p{Number}/gu, '');

  return parseFloat(
    stringNumber
      .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
      .replace(new RegExp('\\' + decimalSeparator), '.')
  );
};

export const percentFormat = (value) =>
  value
    ? new Intl.NumberFormat('fr-FR', {
        style: 'percent',
        minimumFractionDigits: 2,
      })
        .format(value.toString().replaceAll(',', '.') / 100)
        .toString()
        .replaceAll('.', ',')
    : null;

export const cleanerObject = (obj) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj;
};

export const validateEmail = (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
export const validePassword = (value) => /^(?=.*[0-9]).{8,}$/.test(value);
