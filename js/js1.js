/**
 * Created by 93659 on 2018/11/7.
 */
const buf  = Buffer.alloc(10);
console.log(buf);
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

const buf3 = Buffer.from('曹旭朝');
console.log(buf3);
console.log(buf3.toString());
buf3.forEach((item, index) => console.log(item, index))

