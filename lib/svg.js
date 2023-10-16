function genSVG(res){

    if (res.shape=="Square") {
        
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="120" fill="${res.shapecolor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${res.textcolor}">${res.text}</text>
  
  </svg>
 `
  }

  if (res.shape=="Circle") {
        
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${res.shapecolor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${res.textcolor}">${res.text}</text>
  
  </svg>
 `
  }

  if (res.shape=="Triangle") {
        
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${res.shapecolor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${res.textcolor}">${res.text}</text>
  
  </svg>
 `
  }



}





  
  module.exports = genSVG