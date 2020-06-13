exports.debugServiceQ = async (service) => {
  console.log('hello' + service);
  this.debugServiceQ1(service);
};

exports.debugServiceQ1 = async (service) => {
  console.log('ni hao' + service);
};
