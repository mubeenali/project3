<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="viewport" content="width=device-width">
  <link href=&#39;http://fonts.googleapis.com/css?family=Roboto:400&#39; rel=&#39;stylesheet&#39; type=&#39;text/css&#39;>`                                               

</head>

<body>

<script src="./jquery.min.js"></script>
<script src="./jquery.velocity.min.js"></script>
<script src="./velocity.ui.min.js"></script>
<script src="./react.js"></script>
<script src="./JSXTransformer.js"></script>
 <script src="https://www.parsecdn.com/js/parse-latest.js"></script> 
    <!-- Now include parse-react.js -->
    <script src="https://www.parsecdn.com/js/parse-react.js"></script> 
      <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.5.0.min.js"></script>
<script type="text/jsx">
  /** @jsx React.DOM */
var App = React.createClass({

 

    render: function() {
    
      var heading=null;
      var discription=null;
      var url=null;
      
    return (
      <div>
        <label>Heading     </label>
        <input type="text" ref="heading"  /><br/><br/>
    
        <label>Discription </label>
        <textarea type="text" ref="discription" /><br/>
 
        <label>Url Link    </label>
        <input type="text" ref="url"  /><br/>
 
        <button onClick={this.saveAndContinue}>Submit</button>
      </div>
    )
  },
 


saveValues: function(data){
       Parse.initialize("nfK7BwnRSfZqJjTSTPEU5QqamE4mt5C9ZfmGyRIY", "VFWAsqTnr7q3Wx9KTWHbTbH86qHm6EtQsPSQLaol");
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
      testObject.save({data}, {
      success: function(object) {
       
      },
      error: function(model, error) {
       
      }
    });
    },


  saveAndContinue: function(e) {
     data = {
      heading     : this.refs.heading.getDOMNode().value,
      discription : this.refs.discription.getDOMNode().value,
      urlLink   : this.refs.url.getDOMNode().value,
    }
    this.saveValues(data);
}


  }
  );

  React.renderComponent(<App />,  document.body);
    
</script>


</body>
</html>
