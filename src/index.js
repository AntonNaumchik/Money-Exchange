// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var test = currency;
    var n50kop = test % 50; //41
    var H = test - n50kop;  //50
    var HH = H / 50;	// кол-во монеток номиналом 50 коп 1 pcs.
    //alert(HH);
    var n25kop = n50kop % 25; // 16
    var Q = n50kop - n25kop;  // 25
    var QQ = Q / 25;	// кол-во монеток номиналом 25 коп 1 pcs.
    //alert(QQ);
    var n10kop = n25kop % 10; // 6
    var D = n25kop - n10kop;  // 10
    var DD = D / 10;	// кол-во монеток номиналом 10 коп 1 pcs.
    //alert(DD);
    var n5kop = n10kop % 5; // 1
    var N = n10kop - n5kop; // 5
    var NN = N / 5;	    // кол-во монеток номиналом 5 коп  1 pcs.
    //alert(NN);
    var n1kop = n5kop / 1; // 1
    var PP = n1kop;     // кол-во монеток номиналом 1 коп; 1 pcs.
    //alert(PP);
    if (test > 10000) {
        return { error: "You are rich, my friend! We don\'t have so much coins for exchange" };  //адская херня с подбором наминалов к выдаче, покороче сделать не смог
    } else if ((HH > 0) && (QQ > 0) && (DD > 0) && (NN > 0) && (PP > 0)) {
        return { H: HH, Q: QQ, D: DD, N: NN, P: PP };
    } else if ((HH > 0) && (QQ > 0) && (DD > 0) && (NN > 0)) {
        return { H: HH, Q: QQ, D: DD, N: NN };
    } else if ((HH > 0) && (QQ > 0) && (DD > 0) && (PP > 0)) {
        return { H: HH, Q: QQ, D: DD, P: PP };
    } else if ((HH > 0) && (DD > 0) && (NN > 0) && (PP > 0)) {
        return { H: HH, D: DD, N: NN, P: PP };
    } else if ((QQ > 0) && (DD > 0) && (NN > 0) && (PP > 0)) {
        return { Q: QQ, D: DD, N: NN, P: PP };
    } else if ((HH > 0) && (QQ > 0) && (PP > 0)) {
        return { H: HH, Q: QQ, P: PP };
    } else if ((HH > 0) && (DD > 0) && (NN > 0)) {
        return { H: HH, D: DD, N: NN };
    } else if ((HH > 0) && (DD > 0) && (PP > 0)) {
        return { H: HH, D: DD, P: PP };
    } else if ((HH > 0) && (PP > 0)) {
        return { H: HH, P: PP };
    } else if ((DD > 0) && (NN > 0)) {
        return { D: DD, N: NN };
    } else if ((DD > 0) && (PP > 0)) {
        return { D: DD, P: PP };
    } else if (HH > 0) {
        return { H: HH };
    } else if (DD > 0) {
        return { D: DD };
    } else if (NN > 0) {
        return { N: NN };
    } else if (PP > 0) {
        return { P: PP };
    } else if (test == 0) {
        return ({});
    } else {
        return ({});
    }
}