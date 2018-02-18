import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
//import axios from 'axios';
import axios from './../../axios'
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPostId:""
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            const posts=response.data.slice(0,4);
            const updatedPosts=posts.map(post=>{
                return {
                    ...post,
                    author:'Max'
                }
            })
            this.setState({ posts: updatedPosts});
        })
    }

    postSelectedHandler(id){
        this.setState({
            selectedPostId:id
        })
    }

    render () {
        let post= this.state.posts.map(elem=>
            <Post 
                key={elem.id} 
                title={elem.title} 
                author={elem.author}
                clicked={()=>{this.postSelectedHandler(elem.id)}}
            />
        )
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;