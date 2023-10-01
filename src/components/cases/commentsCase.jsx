import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'
import { Textarea } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../router/Coordinators'
import { startEdit } from '../../assets/scripts/Functions'

export const CommentsCase = (props) => {

    const [user, comments] = props.content
    const [newContent, setNewContent] = useState("")
    const [editing, setEditing] = useState(false)

    const reversedComments = comments.reverse()
    const navigate = useNavigate()


    // startEdit(editPost, post, newContent, props.token, props.posts, props.setPosts, setEditing)


    return (
        <div className=" mt-[3vh] ql-editor flex flex-col items-center gap-[1.5vh]">

            {reversedComments.map((comment, index) => {

                return (
                    <div
                        key={index}
                        className="w-[98vw]">
                        {props.postId === comment.postId ?

                            <div
                                key={index}
                                className="comment-box">

                                <div
                                    key={comment.id}
                                    className="flex gap-[45vw]">
                                    <span className="text-[#6F6F6F] text-[12px]">
                                        Enviado por: {comment.creator.username}</span>

                                    {user.id === comment.creator.id || user.role === "ADMIN" ?
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

                                <p className="mt-[1vh] text-[18px]">{comment.content}</p>

                                <div className=" mt-[2vh] flex gap-[5vw]">
                                    <div className="icons-case">
                                        <button>
                                            <LuIcons.LuArrowBigUp className="icon" />
                                        </button>
                                        <span className="text-[12px]">{comment.likes}</span>

                                        <button>
                                            <LuIcons.LuArrowBigDown className="icon" />
                                        </button>
                                        <span className="text-[12px]">{comment.dislikes}</span>
                                    </div>

                                </div>
                            </div>
                            :

                            ""
                        }
                    </div>
                )
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

