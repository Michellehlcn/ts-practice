/**
 * 
 * @callback func 
 * @param {number} wait 
 * @returns {Function}
 */

export default function debounce(func: Function, wait: number = 0): Function {
    let timeoutID: ReturnType<typeof setTimeout> | null = null;
  
    return function (this: any, ...args: any[]) {
      const context = this;
      clearTimeout(timeoutID ?? undefined);
      timeoutID = setTimeout(function () {
        timeoutID = null;
        // use Function.prototype.apply()/Function.prototype.call() which allows us to specify this as the first argument.

        // func.apply(thisArg, args)
        // func.call(thisArg, ...args)
        
        func.apply(context, args);
      }, wait);
    }
  }