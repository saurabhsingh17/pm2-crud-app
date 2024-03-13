module.exports = {
  apps : [{
    name: "test",
    script: 'java',
    args: [
      "-jar",
      "./target/ReactiveCrudApp-0.0.1-SNAPSHOT.jar"
  ],
  env: {
      NODE_ENV: "development",
      SERVER_PORT: "8090",
      SPRING_PROFILES_ACTIVE: "dev"

  },
    increment_var: "SERVER_PORT",
    instances: 2,
    exec_mode: "fork"
  }],

  deploy : {
    development : {
      host : 'localhost',
      ref  : 'origin/main',
      repo : 'https://github.com/saurabhsingh17/pm2-crud-app.git',
      path : '/src/main/java/com/saurabh/reactivecrudapp/ReactiveCrudAppApplication.java',
    }
  }
};
