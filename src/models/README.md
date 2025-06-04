
# Next JS Code Template


## File Structure
```bash
├ /dist                         # build directory 
├ src                           # base Directory of application  
  ├ /app                        # an directory to store the routing files.
  ├ /components                 # an directory to store file component, that can be reusable
  ├ /interfaces                 # an directory to store file interface upon the datas
  ├ /models                     # an directory to store model to manage global state, action configurations.
    ├ /configs                  # storing the custom configuration of your models
    ├ main.provider.tsx         # an core file to manage the customize model of zustand (do not override)
    ├ registry.provider.tsx     # an core file configuration to defining the index of models (do not override)
  ├ /utilities                  # an directory to store all the reusable functions
  ├ /views                      # an directory to store the file configuration upon the view component of applications
    ├ {feature-a}               # example implementation of view components
      ├ /layouts                # an folder to store other file of view design
      ├ index.layout.tsx        # the file configuration to bridging between view - models (it must be called in "/app" folder when 
                                  define the route), this file would be optional if the view wasn't need to connected the models.
      ├ main.layout.tsx         # the file that initiated as controller or it can be the root of view components
```
## Installation

####  1. Install package
```bash
  npm install
```

####  2. Build package
```bash
  npm run build
```

####  3. Run app
```bash
  npm run start
```

####  4. Open application
- [localhost:3000/github](http://localhost:3000/github)
## Authors

- Aidil Febrian - [@KILLYOUGUTSXXX](https://www.github.com/KILLYOUGUTSXXX)


## License

GPL-3.0 license

