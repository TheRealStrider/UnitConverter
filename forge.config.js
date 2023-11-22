module.exports = {
  packagerConfig: {
    asar: true,
    icon: './assets/icon',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './assets/Logo.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: './assets/Logo.png'
        }
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
