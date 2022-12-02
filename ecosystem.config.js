module.exports = {
  apps: [
    {
      name: 'learn.zaxe.com',
      script: 'yarn start --port 9052',
      namespace: 'zaxe',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      version: '1.0.0',
    },
  ],
};
