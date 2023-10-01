import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'
import { Textarea } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../router/Coordinators'
import { startEdit } from '../../assets/scripts/Functions'
import { editPost } from '../../assets/scripts/Posts/EditPostRequest'
import { deletePost } from '../../assets/scripts/Posts/DeletePostRequest'

export const PostsCase = (props) => {

    const [newContent, setNewContent] = useState("")
    const [editing, setEditing] = useState(false)

    const navigate = useNavigate()


    // startEdit(editPost, post, newContent, props.token, props.posts, props.setPosts, setEditing)


    return (
        <div className=" mt-[3vh] ql-editor flex flex-col items-center gap-[1.5vh]">

            {props.reversedPosts.map((post, index) => {

                const slicedId = post.id.slice(0, 8)

                return (
                    <>
                        <div
                            onClick={() => goToPost(navigate, slicedId)}
                            key={index}
                            className="post-box">

                            <div
                                key={post.id}
                                className="flex gap-[35vw]">
                                <span className="text-[#6F6F6F] text-[12px]">
                                    Enviado por: {post.creator.username}</span>

                                {props.userId === post.creator.id || props.role === "ADMIN" ?
                                    <div className="flex gap-[3vw] mt-[.1vh]">
                                        <PiIcons.PiPencilSimpleLineLight
                                            className="icon text-[15px]"
                                        />
                                        <GoIcons.GoTrash
                                            className="icon text-[14px]"
                                        />
                                    </div>
                                    :
                                    ""
                                }
                            </div>

                            <p className="mt-[1vh] text-[18px]">{post.content}</p>

                            <div className=" mt-[2vh] flex gap-[5vw]">
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
                                    <button className="w-[4vw]">
                                        <GoIcons.GoComment className="icon" />
                                    </button>
                                    <span className="text-[12px]">{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </>)
            }
            )}
        </div >
    )
}
{/* // <Textarea
            //     name="newContent"
            //     placeholder="Edite seu post..."
            //     value={newContent}
            //     onChange={(e) => setNewContent(e.target.value)}
            //     focusBorderColor='#EDEDED'
            // />
            //             } */}

