# Portfolio for Enrique Montes

Working at https://enriquemontes.com

It uses strapi as headles cms so you need to first start strapi:

```
cd portfolio-strapi
npm start develop
```

Para activar Strapi
http://localhost:1337/admin/
User: e\***_@_**.com.mx
Password: LaDeGeocities con punto nacimiento

Esta alojado en Netlify con la cuenta de enriqueadelino

Previous version of the site at:
https://60614c5f60636e57113b7379--competent-benz-660eeb.netlify.app/

## Setup Notes

1. Used Hello World Starter (all packages included)
2. All components ready to go (including imports)
3. main.css - all styles ready to go
4. No font plugin
5. React-icons
6. Limit amount of components - better overview
7. Use constants to avoid repetition
8. Favicon in Static
9. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
