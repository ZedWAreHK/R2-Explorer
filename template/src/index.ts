import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.dev/getting-started/configuration/
export default R2Explorer({ readonly: true, basicAuth: [{
    username: 'zedware',
    password: 'zdw123456'
  },{
    username: 'stars',
    password: 'stars114514'
  }] 
});
