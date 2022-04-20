import { filter } from 'lodash';

export default function applySortFilter(array = [], label, comparator, query) {
  //   const stabilizedThis = array.map((el, index) => [el, index]);
  //   stabilizedThis.sort((a, b) => {
  //     const order = comparator(a[0], b[0]);
  //     if (order !== 0) return order;
  //     return a[1] - b[1];
  //   });
  if (query) {
    return filter(
      array,
      (_user) => _user[label].toLowerCase().indexOf(query.trim().toLowerCase()) !== -1,
    );
  }
  //   return stabilizedThis.map((el) => el[0]);
  return array;
}
