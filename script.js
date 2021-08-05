"use strict";

function digPow(n, p){
    let res = 0;
    const strNum = String(n);
    for ( let i = 0; i< strNum.length; i++){
      res = res + Math.pow(strNum[i],p);
      p++;
    }
      if (res / n >= 1 && res % n == 0){
        return res/n;
      } else {
        return -1;
      }
  }