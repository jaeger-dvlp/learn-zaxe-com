module.exports = {
  apps: [
    {
      name: 'learn.zaxe.com',
      script: 'yarn start --port 9052',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      watch: false,
      namespace: 'zaxe',
    },
  ],
};
