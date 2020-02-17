export default class Utils {
  public static isValidDate = (date?: Date): boolean => {
    return date instanceof Date && !isNaN(date.getTime());
  };

  public static convertToDate = (value: any, fallback?: Date) => {
    let result = fallback;
    if (value) {
      let date = new Date(value);
      if (Utils.isValidDate(date)) {
        result = date;
      }
    }
    return result;
  };
}
