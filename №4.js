const employer = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']
const employerName = [...employer].map(word=>word.toLowerCase()).filter(item=>(item!=''?item:null))
const cash = [40000, 5000, 30400, 12000],
    eu = ['SRL', 'PLO', 'J&K'],
    rus = ['RusAuto', 'SBO']
const sponsors = {
    cash,
    eu,
    rus
}
    function calcCash(own=[0]) {
      const total = own.reduce((acum,item)=>{return acum+item})
      return total
    }
   
   const moneyy = calcCash(cash)

   function makeBusiness(owner=null,director = 'Viktor', cash , emp) {
       const sumSponsors = [...eu,...rus]
       console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} and our employyers ${emp}`)
       console.log('And we have a sponsors: ');
       console.log(sumSponsors.join())
       console.log('Note. Be careful with ' + eu[0] + ". It's a huge risk.")
   }
   makeBusiness(null,'Sam',moneyy,employerName)

 