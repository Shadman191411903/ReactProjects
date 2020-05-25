import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component{

    state={videos:[],selectedVideo:null}
    
    
    onFormSubmit=async (term)=>{
        const KEY='AIzaSyCvF32I0WaJ5VPfHnQz0QlQDcYmfCFtVyI';


        const response=await youtube.get("/search", {
            params: {
              q: term,
              part: "snippet",
              maxResults: 5,
              key: KEY
            }
          });
          console.log(response.data.items)
          this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})

    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }
    render(){
        return(<div className="ui container">
                    <SearchBar onFormSubmit={this.onFormSubmit} className="ui container"/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>

                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                            </div>

                        </div>


                    </div>
                
               </div>
        )
    }
}
export default App