const title = React.createElement(
    //three arguments
    //1. type <h1><div> 
    'h1',
    //2. object <any attributes "id" null or {} if no attribute
    //3. contents or children of the elements or null
    {
        id:'main-title', title:'This is a title.'
    },
    'My First React Element'
);
console.log(`this is working`);
console.log(title);