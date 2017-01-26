Function.prototype.defer = function(ms){
  return (...args) => setTimeout(() => {
    this.apply(this, args)
  }, ms);
};
