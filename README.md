This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
[Mantine](https://ui.mantine.dev/) librariries and functionality were leveraged in this application.

## Starting Application
First, clone the project using git clone https://github.com/Humdaan488/Clinical-Trial-Dataset.git

Then in the project directory, run the following to setup project:
### `npm install`
Installs relevant dependencies. \
Note: npm install in a React project created with Create React app can take longer on the first installation\
compared to subsequent runs. This is due to the number of dependencies as well as having nothing cached on first try.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## Main Project files

### `TableData.js`
- Custom React hook to fetch and transform subjects data from a mock API endpoint.
- Manages loadi
- ng state and provides structured subject data to components.
### `DisplayTable.js`
- React component that utilizes Mantine library to display, filter, and sort subjects data.
- Configures table columns, integrates data from TableData.js, and manages table features like row selection, column ordering, and pinning.
- Can filter and sort based on any of the 6 attributes (Name, Age, Gender, Diagnosis Date, Status, and Unique ID)
### `App.js`
- Root component that sets up the React application, including global styles with MantineProvider.
- Renders the application's main UI elements: logo, page title, vision statement, and the main DisplayTable component.
### `Index.js`
- Entry point for the React application, responsible for rendering the App component into the DOM.

## Important Design Decisions
### `Filtering`
Several design decisions were made in DisplayTable.js regarding filtering to enhance user experience and data interpretation. Below are examples of some of these decisions:
- **Name**: A text search filter is applied to "Name" column based on the assumption that users may know specific subjects they are looking for and wish to filter the list to only those matching their input, facilitating a more direct and user-friendly search process.
- **Age**: A range filter is leveraged for the "Age" column to allow users to specify a minimum and maximum age. This is particularly useful in a medical or clinical context where age ranges can be crucial for data analysis.
- **Gender**: A select dropdown filter is used for the "Gender" column to offer predefined options and allow users to efficiently categorize data by gender.
- **Diagnosis Date**: A date-range filter is applied to the "Diagnosis Date" column to allow users to filter subjects diagnosed within a specific timeframe. Given the time-sensitive nature of medical data, this allows users to focus on subjects diagnosed within relevant time periods.
- **Status**: A checkbox filter is used for the "Status" column to distinguish between Active and Inactive statuses. This binary filter simplifies the categorization process by allowing users to quickly seperate subjects based on their current status
- **Id**: A text search filter is applied to "Unique ID" column in the case that users want to search subjects based on their available ID.

Overall, the chosen filtering options aim to optimize the data table for usability, relevance to clinical or research needs, and efficiency.

### `Sorting`
The sorting functionality in DisplayTable.js is integrated with a focus on enhancing data analysis and navigation. Some design decisions made were the following:
- **Sortable Columns**: All columns are sortable using the UI indicators in the column headers. This universal sorting capability allows users to organize data based on any of the six attributes enhancing flexibility and analytical depth.
- **Intuitive UI for sorting**: Sorting data by clicking on column headers is a common UI pattern that is intuitive and familiar to most users. Clicking once sorts the column in ascending order, while clicking again sorts it in descending order. User experience was a primary focus when deciding on this toggle approach.
- **Default Sorting State**: Initially, columns are not sorted, presenting data in its original or entered sequence. This neutral starting point ensures users are not biased by an initial sorting and can choose to sort data as per their analysis needs.
- **Sorting Logic Customization**: For specific columns like "Diagnosis Date," sorting logic may be customized to handle different data types correctly (e.g., dates). Ensuring accurate sorting for such data types is crucial in maintaining the integrity of the sorted information.

The sorting design decisions are geared toward making the data table user-friendly and adaptable to different user needs  
### `General`
Several other crucial design decisions were made to enhance usability and provide a seamless user experience:
- **Row checkboxes for Selection**: Implemented functionality to enable users to select and focus on specific rows for comparison or batch actions. This feature supports multi-selection, allowing users to perform actions on multiple items simultaneously, increasing efficiency and user control.
- **Pagination**: Incorporated to manage large datasets effectively, improving load times and reducing scrolling. It helps maintain a clean and uncluttered interface.
- **Customizable Column Ordering**: Users can reorder columns according to their preference or task requirements. This flexibility allows users to prioritize the data most relevant to their current analysis
- **Column Pinning**: Provides the option to pin columns to the sides of the table. This feature is crucial for comparing specific fields across multiple entries, ensuring that important data remains visible as the user scrolls horizontally.
- **Row Hover State**: Indicates the currently selected or hovered-over row which improves readability and focus. Such visual feedback is essential for tracking active selections particularly in tables with extensive data.
- **Prettier**: Leveraged to ensure code is organized, readable, and well-structured
- **Responsive Design**: The table and application are designed to be responsive, adjusting to different screen sizes and orientations. This ensures that users have a consistent experience across all devices with a focus on boosting accessibility and usability.

All these design decisions collectively contribute to a user-centric application, prioritizing flexibility, efficiency, and ease of use. Focus has been placed on user needs every step of the way with the application aiming to provide a powerful yet intuitive tool for data analysis and management.
