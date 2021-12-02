export function test(result) {
  if (result.result == false) throw new Error(result.msg);
}
