var object = {
     a:'100',
     b: {
        value: 10     
     },
     c: [0,1,2]
 }
 
 function deepClone(obj) {
     var cloned ={}
     for (i in obj) cloned[i] = typeof obj[i] == 'object' ? deepClone(obj[i]) : obj[i]
     return cloned
 }
 
 var object2 = deepClone(object)
 object2.a = '000'
 object2.b.value = 20
 object.c[2] = 20
 
 
 console.log(object)
 console.log(object2)
