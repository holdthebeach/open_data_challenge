# Open Data App

This dashboard gives users an overview of the federal ministries and the number of data sets they make available to the public.

## Preview

![Demo]()


## Built With
* React
* HTML
* CSS

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

 - npm

```sh
  npm install -g
  ```

### Setup

1. Clone the repo
   ```sh
   git clone https://github.com/holdthebeach/open_data_challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
 3. Run the Project in the Dev Environment
	 ```sh 
	 npm run dev 
	 ```
4. Visit the localhost url to view project in browser

## To-Do List

- [x] Set up app with minimum sorting function
	- [x] Install React using Vite
    - [x] Make Card Component
    - [x] Add Ministry Data to State
    - [x] Add ascending and descending sort functionality (re-render is not getting triggered)
- [ ] Figure out how function imports in vitest work for two commented out tests to pass
- [ ] Add axe-core to automate accessibility testing
- [ ] Add types/use Typescript
- [ ] Add d3 graph to visually show comparison of ministries
- [ ] Change sorting to dropdown element instead of buttons
- [ ] Use SASS variables
- [x] Make responsive grid design
- [ ] Either use ellipses for ministry names or set a fixed height for element