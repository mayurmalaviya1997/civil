
import '../CSS/style.css';
import '../CSS/Blog.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Blog(){
    /* PROPS USE  */
const Arr = [

    {    myDate: new Date(2022,6,10),
         blogTitle : "My title 1..",
         blogPost : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, doloribus?",
         views : 5000
    },
    {    myDate: new Date(2022,6, 8),
         blogTitle : "My title 2..",
         blogPost : "ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, doloribus?",
         views : 3000
    }  
]; 

    /* 
    let myDate= new Date();
        let month = myDate.toLocaleString('en-US', {month='long'});
        let year = myDate.getFullYear();
        let day = myDate.toLocaleString('en-US', {day='2-digit'})
        let postDate = `${day},${month}-${year}`;
        let blogTitle = "My title 1..";
        let blogPost = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, doloribus?";
        let views = 5000;
    
    */

    return(
    <div>
        {/* <div>Thi is blog Page</div> */}
        <div className='container'>
            <div className="row p-1 rounded bg-light BlogContainer">
                <dic className="col-12 text-left pl-5"> <h1> Blogs</h1></dic>
                <div className="col-12">
                    <BlogElement
                    Date={Arr[0].myDate}
                    Title={Arr[0].blogTitle}
                    Post={Arr[0].blogPost}
                    View= {Arr[0].views}>
                    </BlogElement>   

                    <BlogElement
                    Date={Arr[1].myDate}
                    Title={Arr[1].blogTitle}
                    Post={Arr[1].blogPost}
                    View= {Arr[1].views}
                    >
                    </BlogElement>                     
                </div>
            </div>            
        </div>
    </div>    
    );
}

function BlogElement(props){
    let Day= props.Date.toLocalString('en-US', {Date:"2-digit"});
    let Month = props.Date.toLocalString('en-Us', {Month:'long'});
    let Year = props.getFullYear()
    let postDate = `${Day}, ${Month}- ${Year}`;
    let blogTitle = props.Title;
    let blogPost = props.Post;
    let views = props.View;

return(
    <div>
        <div className="row  BlogElement  Primary m-2 rounded align-items-top">
            <div className="col-lg-2 col-12"> { postDate } </div>   
            <div className="col-lg-3 col-12"> <b>{ blogTitle }</b> </div>
            <div className="col-lg-4 col-12"> <p>{ blogPost }</p></div>
            <div className="col-lg-2 col-12"> <p>{ views }</p> </div>
        </div>
    </div>
    );
}

export { Blog, BlogElement};