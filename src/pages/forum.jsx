import { useState, useEffect } from 'react'
import { MobileHeader } from '../components/mobileHeader'
import { goToLogin } from '../router/Coordinators'
import { GetPosts } from '../assets/scripts/Posts/GetPostsRequest'
import { PostsCase } from '../components/postsCase'
import { CreatePost } from '../assets/scripts/Posts/CreatePostRequest'
import { Textarea } from '@chakra-ui/react'

export const Forum = (props) => {

    const [isLogged, setIsLogged, token, setToken] = props.status
    const [user, setUser, posts, setPosts, comments, setComments] = props.content
    const [postContent, setPostContent] = useState("")
    const [commentContent, setCommentContent] = useState("")

    const posting = () => {
        CreatePost(postContent, token, posts, setPosts)
        setPostContent("")
    }

    return (
        <>
            <MobileHeader
                function={goToLogin}
                status={props.status}
            />

            <div className="mt-[5vh] flex flex-col font-sans text-[16px] items-center ">
                <form className="flex flex-col">
                    {isLogged ?
                        <Textarea
                            name="content"
                            placeholder="Escreva seu post..."
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            w={"88vw"}
                            h={'20vh'}
                            size={'md'}
                            color={'#646262'}
                            bg={"#EDEDED"}
                            focusBorderColor='#EDEDED'
                        />
                        :
                        <Textarea
                            name="content"
                            isReadOnly
                            placeholder="Faça login para começar a postar..."
                            w={"88vw"}
                            h={'20vh'}
                            size={'md'}
                            bg={"#EDEDED"}
                        />
                    }
                    <button
                        className="w-[88vw] h-[5vh] text-[18px] font-bold 
                        rounded-[2vw] active:scale-[.98] mt-[4vh] text-white 
                        bg-gradient-to-r  from-[#FF6489] to-[#F9B24E]"
                        type="button"
                        onClick={() => posting()}>
                        Postar
                    </button>
                </form>
            </div>

            <div className="ml-[6vw] w-[88vw] h-[.2vh] bg-gradient-to-r  
            from-[#FF6489] to-[#F9B24E] mt-[4vh]" />

            <PostsCase
                posts={posts}
                setPosts={setPosts}
                user={user}
                token={token}
            />
        </>
    )
}