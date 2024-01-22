module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::body",
    config: {
      formLimit: "2gb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 2 * 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
];
