function sumArgs() {
  let splice = [].splice;
  let args = splice.call(this, arguments);
  console.log(args);
}
