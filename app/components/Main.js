// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state properties with any default values
  //
  getInitialState: function() {
    return { state1: "", state2: "", state3: [] };
  },

  // The moment the page renders this runs.
  componentDidMount: function() {
      Some code here
    
  },

  // If the component changes (triggered by setState())
  componentDidUpdate: function(prevProps, prevState) {

    some code here
  },
  // This function allows childrens to update the parent.
  // Passed to the children via props
  setTerm: function(term) {
    this.setState({ state1: term });
  },
  // Here we render the function. (must only return one element. so wrap in div)
  render: function() {
    return (
      <div className="container">
          more code here

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
