<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="viewport" content="width=device-width">
  <link href=&#39;http://fonts.googleapis.com/css?family=Roboto:400&#39; rel=&#39;stylesheet&#39; type=&#39;text/css&#39;>
  <script src="http://fb.me/react-0.13.3.min.js"></script> 
    <script src="https://www.parsecdn.com/js/parse-latest.js"></script> 
    <!-- Now include parse-react.js -->
    <script src="https://www.parsecdn.com/js/parse-react.js"></script> 
   <!-- <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> -->
      <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.5.0.min.js"></script>
</head>

<body>

<script src="./jquery.min.js"></script>
<script src="./bootstrap.min.js"></script>
<script src="./jquery.velocity.min.js"></script>
<script src="./velocity.ui.min.js"></script>
<script src="./react.js"></script>
<script src="./JSXTransformer.js"></script>
<script type="text/jsx">
  /** @jsx React.DOM */
  var Ap = React.createClass({
    getInitialState: function(){
        return {
            data: []
        }
    },
    componentDidMount: function(){
        var that = this;
        Parse.initialize("nfK7BwnRSfZqJjTSTPEU5QqamE4mt5C9ZfmGyRIY", "VFWAsqTnr7q3Wx9KTWHbTbH86qHm6EtQsPSQLaol");
        var GameScore = Parse.Object.extend("TestObject");

        var query = new Parse.Query(GameScore);

        query.find({
            success: function(results) {
                that.setState({
                    data: results
                });
            },
            error: function(error) {
                that.setState({
                    data: []
                });

            }
        });
    },
    render: function(){
        var com =[];

      for (var i in this.state.data) {

            com.push( <tr><td>{this.state.data[i].attributes.data.heading}</td><td>{this.state.data[i].attributes.data.urlLink}</td><td>{this.state.data[i].attributes.data.discription}</td></tr>);
    //      debugger;
          }
         
          return(
               <div id="second-div">
            <table>
            <thead>
      <tr>
        <th>Heading  </th>
        <th>Link  </th>
        <th>Deatail  </th>
      </tr>
    </thead>
    <tbody>
          {com}    
    </tbody>
    </table> 
          </div>
  )
    }
});
  
  React.renderComponent(<Ap/>,  document.body);


</script>

</body>
</html>