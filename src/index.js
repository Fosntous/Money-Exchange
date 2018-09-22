// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var h = 0, q = 0, d = 0, n = 0, p = 0, c = currency;
  var r = {};
  if(currency > 10000)return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while(c >= 50){
      c-=50;
      h++;
    }
    if(h != 0)r.H = h;
    while(c >= 25){
      c-=25;
      q++;
    }
    if(q != 0)r.Q = q;
    while(c >= 10){
      c-=10;
      d++;
    }
    if(d != 0)r.D = d;
    while(c >= 5){
      c-=5;
      n++;
    }
    if(n != 0)r.N = n;
    if(c >= 0)p = c;
    if(p != 0)r.P = p;
    return r;
}
