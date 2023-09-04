function exclude(element, keys) {
  for (let key of keys) {
    delete element[key];
  }
  return element;
}
