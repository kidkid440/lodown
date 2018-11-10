'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return whatever value that is inserted.
 * 
 * @param {Any Value}: This can be any one Value.
 * 
 * @return The same exact value that was set as a param.
 * 
 * Usage:
 * 
 */        
          
          function identity(value){
             return value;
        }
       module.exports.identity = identity;
       
/**
* typeOf: Designed to return the type of  value in a string. 
* Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
 * 
 * @param {value}: Can be any given value.
 * 
 * @return {'String'}: Will be a string containing the type of value.
 * 
 * Usage:
 * 
 *        function typeOf(value){
 *          if(Array.isArray(value)){
*             return 'Array';
*          }else if(value === null){
              return 'null';
           }
           return typeof value;
*       }
*     module.exports.typeOf = typeOf;
* 
*/

/**     
* first: Designed to take in two args(array, number). If  array is not given it returns a 
* a []. Next it checks to see if a number is given || is not a number at all. If any of these
* are true it will return the first element of the array. Then if the number is  
* more than array.length it will return the entire array. Lastly it will return
* the first (whatever number is) elements of the array
* 
* @param {array, number}
* 
* @return See first Above.
* 
* Usage:
*/ 
             function first(array, number){
                 let list = [];
                 if(!Array.isArray(array)){
                     return list;
                 }
                 if(!number || isNaN(number)){
                     return array[0];
                 }else if(number > array.length){
                     return array;
                 }else{
                     for(var i = 0; i < number; i++){
                         list.push(array[i]);
                     }
                 }
                 return list
             }
          module.exports.first = first;
          
/**
 * last: Designed to return the last element in a array. It takes two args
 * (array, number) so if no array is past in || number is negative it will 
 * retern a []. Then if no number  is past in || number is NaN it will return the 
 * last element in the array. Then if number is larger than array.length return
 * entire array. Otherwise it will loop over the array and return the last 
 * (Whatever number is) elements
 * in the array.
 * 
 * @param {array, number}
 * 
 * Usage:
 * 
 */                
                    function last(array, number){
                        
                    if(!Array.isArray(array) || number < 0){
                        return [];
                    }else{
                        if(!number || isNaN(number)){
                            return array.length - 1;
                        }else if(number > array.length){
                            return array
                        }else{
                            return array.slice(array.length - number, array.length)
                        }
                    }
                 }
                  module.exports.last = last;
                 
/**
 * indexOf: Designed to take two args(array, value). It will loop thru the array
 * and return the first occurrance of the values Index. Next if the value is not 
 * found in the array it will return -1.
 * 
 * @param {array, value}
 * 
 * Usage:
 */
               function indexOf(array, value){
                   for(var i = 0 array.length; i++){
                       if(array[i] === value){
                           return i;
                       }else{
                           
                       }
                   }
                   return -1;
               }
               module.exports.indexOf = indexOf;
/**
 * filter: Designed to take two args(array, function) first it will loop thru each
 * element in the array sending it thru the function(element,index,array) as params.
 * It will return a new array with all the elements that return true from the 
 * function.
 * 
 * @param {array, function}
 * 
 * Usage:
 */          function filter(array, sort){
              let page = [];
                for(let i = 0; i < array.length; i++){
              const result = sort(array[i], i, array);
                 if(result === true){
                      page.push(array[i]);
      }
  }  
  return page;
};
module.exports.filter = filter;

/**
 * reject: Designed to take two args(array, function), it will loop over each element in 
 * the array applying the function(element,index,array) to each element. It will 
 * return a new array with the elements that returnes a false value from the function.
 * 
 * @args {array, function}
 * Usage:
 */
               function reject(array, function(element,i, array){
                   let box = []
                   if(.filter(array, function(element, i, array){
                       return !element;
                   }).length > 0){
                       box.push(element)
                   }
               });
             module.exports.reject = reject;
             
/**
 * partition: Designed to take two args(array, function), it will loop throught
 * array passing the function on each element in the array. It will return a 
 * array that contains two sub arrays. One sub should contain truthy and one should 
 * contain falsy.
 * 
 * @args {array, function}
 * 
 * Usage:
 */
 function partition(array, function){
    let  result = [];
    let box = [];
    let bigBox = [];
    for(let i = 0; i < array.length; i++){
if(bunch(array[i], i, array) === true){
        result.push(array[i]);
     }else{
        box.push(array[i]);
     }
    }
    bigBox.push(result);
    bigBox.push(box);
    return bigBox;
 }   
 module.exports.partition = partition;
  
 /**
  * Unique: Designed to take one arg(array), it will return a new array of all 
  * elements with  duplicates removed. Use indexOf from above .
  * 
  * @arg {array}
  * 
  * Usage:
  */
        function unique(array){
         var arr = [];
           for(var i = 0;i < array.length;i++){
             if(_.indexOf(arr,array[i]) < 0){
               arr.push(array[i]);
        }
          }
            return arr;
           };  
                 module.exports.unique = unique;
/**
 * map: Designed to take two args(collection, function), it  past the function
 * over every element in the given collection. If collection is array 
 * function(element,i,collection). If collection is Object function(value,key,collection)
 * Whatever the return value is will be saved in a new array. then it will return the array.
 * 
 * Usage: 
 */
 _.map = function(collection, action){
    let arr = [];
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            arr.push(action(collection[i], i, collection));
        }
    }else {
     for(var key in collection){
        arr.push(action(collection[key], key, collection));
      }
    }
    return arr;
};
module.exports.map = map;

/**
 * pluck: Designed to take two args(array of objects, a property), it will an 
 * array containing the value of property foe every elememt.
 * 
 * @arg {array of objects, property}
 * 
 * Usage: 
 */
           function  pluck(array, prop){
    return _.map(array, function(obj, i, arr) {
        return obj[prop];
    });
};
module.exports.pluck = pluck;

/**
 * contains: Designed to take two args(arrray, value), will return true if 
 * value is found in array. Else it wiil return false.
 * 
 * @arg {array, value}
 * 
 * Usage:
 */
             function contains(array, value){
 return _.indexOf(array,value) >= 0 ? true : false ;
};
                 module.exports.contains = contains;
                 
/**
 * every: Designed to take two args(collection,function), it will call the function
 * on every element of the collection. If collection is array function(element,index,collection)
 * If collection is object function(value, key, collection). So it will return true 
 * if every element returns true from the function. If one returns false from the function
 *  return false.
 * 
 * @arg(collection,function)
 * 
 * Usage: 
 */
 function every(collection, action){
    if(!action){
    if(_.filter(collection, function(element, i, collection){
        return !element;
    }).length > 0){
        return false;
    }
       
    }else if(action){
    if(Array.isArray(collection)){
       for(var e = 0; e < collection.length; e++){
          if(action(collection[e], e, collection) === true){
              
          }else {
              return false;
          }
           
       }     
       }
       
       
    }else if(collection instanceof Object){
        for(let key in collection){
            if(action(collection[key], key, collection) === true){
                
            }else{
                return false;
            }
        }
    }
    return true;
};
module.exports.every = every;
                 
/**
 *some: Designed to take args(collection,function), it will take the function and
 * pass over every element in the array. If collection is array function(element,i,collection)
 * , and if object function(value,key,collection). Next it will check if anyone of
 * the return are true if so it will return true. If all elements return false the the 
 * return value is false. but if no function is given rtuen true if on element returns true.
 * 
 * @arg(collection,function)
 * 
 * Usage
 */
_.some = function(collection, action){
    if(!action){
       if( _.filter(collection, function(element){
           return element;
       }).length > 0){
        return true;
        }else {
            return false;
        }
    }else if(action){
       if(Array.isArray(collection)){
           for(var i = 0; i < collection.length; i++){
               if(action(collection[i], i, collection) === false){
                   
               }else{
                   return true;
               }
           }
          
       }else{
           for(var key in collection){
               if(_.indexOf(Object.keys(collection), [key]) < 0){
                   return true;
               }
           }
    }
        return false;
    }
module.exports.every = every;
                 
/**
 *reduce: Designed to take two arg(array,function,seed), it will call the function
 * over every element in array--function(previous result,element, array). the return value 
 * of function will be used as previous result for next turn thru array. On the first
 * turn seed will be used as previous result. If no seed use array[0]/ first value as seed.
 * After final turn thur array return the value on the final function call.
 * 
 *@arg{array,function,seed}
 * 
 * Usage:
 */
_.reduce = function(array, action, seed){
   let value;
   _.each(array, function(element, i, array){
       if(seed === undefined && i === 0){
           value = array[0];
       }else if(i === 0){
           value = action(seed, element, i);
       }else{
           value = action(value, element, i);
       }
   });
   return value;
};
module.exports.reduce = reduce;

/**
 *extend: Designed to have two arg(object1,object2) and could possibly have more objects.
 *First it will copy object2 properties to object2. If more propperties are passed in
 * copy them to object1 in the order they are passed. lastly return updated object1.
 * 
 * @arg{Object1,object2}
 * 
 * Usaage:
 */
 _.extend = function(target, obj2){
    var sources = [].slice.call(arguments, 1);
        sources.forEach(function (source) {
            Object.getOwnPropertyNames(source).forEach(function(propName) {
                Object.defineProperty(target, propName,
                    Object.getOwnPropertyDescriptor(source, propName));
            });
        });
        return target;
    };
    module.exports.extend = extend;

