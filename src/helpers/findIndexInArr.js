import _ from 'lodash';

export const findIndexInArr = (obj, arr) => {
  var defaultValueIndex = -1;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element.code == obj) {
      defaultValueIndex = index;
    }
    if (index == arr.length - 1) {
      if (index == arr.length - 1) {
        return defaultValueIndex;
      }
    }
  }
};
