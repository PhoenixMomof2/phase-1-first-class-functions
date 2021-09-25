function  receivesAFunction (cb){
    cb();
}
function namedFunction(){
};

function returnsANamedFunction (){
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){}
     }
