import React from "react";
import useCustomForm from "./hooks/useCustomForm";

    const App = () => {

      const initialValues = {
        name: "",
        lastName: "",
        age: 0
      };

      const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      } = useCustomForm({ 
        initialValues,
        onSubmit: values => console.log('onSubmit Values', { values })
      });
    
      return (
        <div>
          <form onSubmit={handleSubmit} className="App">
            <h3>Custom Forms with Hooks</h3>

            <label>Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <br />

            <label>Lastname</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />

            <label>Age</label>
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
            />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };

export default App;