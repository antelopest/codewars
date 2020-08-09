/*
  Take the following IPv4 address: 128.32.10.1

  This address has 4 octets where each octet is a single byte (or 8 bits).

  1st octet 128 has the binary representation: 10000000
  2nd octet 32 has the binary representation: 00100000
  3rd octet 10 has the binary representation: 00001010
  4th octet 1 has the binary representation: 00000001
  So 128.32.10.1 == 10000000.00100000.00001010.00000001

  Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

  Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.
 */

const int32ToIp = int32 => {
  const toIP = s => {
    if (s.length === 32) {
      let ip = [];
      let octet = '';
      for (let i = 0; i <= s.length; i++) {
        octet += s[i];
        if (octet.length === 8) {
          ip.push(octet);
          octet = '';
        }
      }

      ip = ip.map(octet => parseInt(octet, 2));
      ip = ip.join('.');
      return ip;
    }
    return '0.0.0.0';
  }

  let binary = int32.toString(2);

  return toIP(binary);
}


console.log(
    int32ToIp(2149583361),
    int32ToIp(0),
    int32ToIp(2154959208)
)


/*
  OR USE BITWISE OPERATIONS

  function int32ToIp(int32) {
   return (
            ((int32 >> 24) & 0xFF) + "." +
            ((int32 >> 16) & 0xFF) + "." +
            ((int32 >>  8) & 0xFF) + "." +
            ((int32) & 0xFF)
          );
   }
*/



