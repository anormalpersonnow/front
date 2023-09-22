import { GetPosts } from "../assets/scripts/Posts/GetPostsRequest"
import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'

export const PostsCase = (props) => {

    return (
        <div className=" mt-[3vh] flex flex-col items-center gap-[1.5vh]">
            {props.posts.map((post, index) => {

                return (
                    <div key={index} className="w-[80vw] flex flex-col p-[3vw]
                    rounded-[2vw] border-[#E0E0E0] border-[1.5px] cursor-pointer">


                        <div className="flex gap-[40vw]">
                            <span className="text-[#6F6F6F] text-[12px]">
                                Enviado por: {post.creator.username}</span>

                            {props.user.id === post.creator.id ?
                                <GoIcons.GoTrash className="icon" />
                                :
                                ""
                            }
                        </div>

                        <p className="mt-[1vh] text-[18px]">{post.content}</p>

                        <div className=" mt-[2vh] flex gap-[2vw]">

                            <div className="icons-case">
                                <button>
                                    <LuIcons.LuArrowBigUp className="icon" />
                                </button>

                                <span className="text-[12px]">{post.likes}</span>

                                <button>
                                    <LuIcons.LuArrowBigDown className="icon" />
                                </button>

                                <span className="text-[12px]">{post.dislikes}</span>
                            </div>
                            <div className="icons-case">
                                <button>
                                    <GoIcons.GoComment className="icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}