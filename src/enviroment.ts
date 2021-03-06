// Set the host
const dev = {
    context: 'http://localhost:8080'
  };
// Set the server host
  const prod = {
    context: 'http://ec2-3-17-131-206.us-east-2.compute.amazonaws.com:8081'
  };
  
// Set the enviroment to the host
  export let environment = dev;
  
  if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV === 'production') {
    environment = prod;
  }