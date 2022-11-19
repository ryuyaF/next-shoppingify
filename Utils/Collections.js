
export const groupBy = (array, getKey) =>
  Array.from(
      array.reduce((map, cur, idx, src) => {
          const key = getKey(cur, idx, src);
          const list = map.get(key);
          if (list) list.push(cur);
          else map.set(key, [cur]);
          return map;
      }, new Map())
  );

