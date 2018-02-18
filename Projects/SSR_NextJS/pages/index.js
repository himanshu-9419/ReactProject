import React,{Component} from 'react';
import Link from "next/link";
import Router from 'next/router';
import User from './../components/user';
class IndexPage extends Component{
    static async getInitialProps(context){
        console.log(context);
        //await do somethig
        return  {appName : 'Super App'};
    }
    // static  getInitialProps(context) {
    //     console.log(context);
     //   use axios and return promise basically 
    //     return promise;
    // }
   render(){
       return( <div>
        <h1>The Main Page {this.props.appName}</h1>
        <User name="himanshu" age="26"/>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <button onClick={()=>Router.push('/auth')}>Go to Auth</button>
    </div>
    )
   }
}

export default IndexPage;