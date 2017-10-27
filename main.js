/**
 * @param {Number} num
 * @returns {Number} num  
 */

const rainDrops = (num) => {
  let output = "";
  if (!Number(num)) {
	  return "invalid input"
	} if( num % 3 === 0) { 
			output += "Pling" 
		} if (num % 5 === 0) { 
			output += "Plang" 
		} if (num % 7 === 0) { 
		  output += "Plong" 
		} if (output.length === 0) {
			return num 
		}
  		return output;
};

export default rainDrops;
