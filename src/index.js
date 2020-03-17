module.exports = function check(str, bracketsConfig) {
 let stackBracket = [];
 let openBracket;
 let singleBracket = 0;
 str.split("").forEach(bracket =>{
   if(singleBracket > 0) {
     return;
    }
  bracketsConfig.forEach(element => {
    if(element[1] == bracket) {
      openBracket = stackBracket.pop();
      if (openBracket!==element[0]) {
        if (element[0] == bracket) {
          if(openBracket) {
            stackBracket.push(openBracket);}
          stackBracket.push(bracket);
        } else {
          singleBracket++;
        }

      }
    }else if(element[0] == bracket) {
      stackBracket.push(bracket);
  }
  });
 });
 
 if (stackBracket.length>0||singleBracket > 0) {
  return false;
 } else {return true;}


}

