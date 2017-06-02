function generateAgeCount() {
   return Math.floor((Math.random() * 50) + 15);
 }

 const family = [
   {
     id: 1,
     firstname: 'lulu',
     lastname: 'lala',
     url: '#',
     votes: generateAgeCount(),
     gender:'f',
     age:'3',


   },
   {
       id: 2,
       firstname: 'lisi',
       lastname: 'tata',
       url: '#',
       votes: generateAgeCount(),
       gender:'f',
       age:'2',
   }

 ];

export {familyList, generateAgeCount};
