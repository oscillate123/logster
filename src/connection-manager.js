const counter = 0;

function connect() {
  try {
    return new Promise((resolve, reject) => {
  
      let connection = mysql.createConnection({
        host: 'hostname',
        user: 'username',
        password: 'password',
        database: 'db'
      })
  
      connection.connect(err => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })  
  
    })
  } catch (err) {
    switch (err.code) {
      case 'ECONNREFUSED':
        counter += 1;
        if (counter < 10) {
          setTimeout(connect(), 500)
        }
        console.log(err)
      case 'ER_ACCESS_DENIED_ERROR':
        console.log(err)
      case 'ENOTFOUND':
        console.log(err)
      case 'EHOSTUNREACH':
        console.log(err)
      case 'EINVAL':
        console.log(err)
      default:
        console.log(err)
    }
  }
}