const testString = `
var obj={}
obj.a=7
obj.b=8
obj.c=[2,3,4]
var sum=0
for(var k in obj){
	var val=obj[k]
	if(Array.isArray(val)){
		sum+=val.reduce(function(a,v){return a+v})
	}
	else{
		sum+=val
	}
}
sum
`
require('../dist/index')
	.getInstance()
	.then(mod => {
		console.log('eval: ', eval(testString))
		console.log('eval.js: ', mod.eval(testString))
	})
