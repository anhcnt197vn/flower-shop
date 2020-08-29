import { useEffect, useState, useRef } from "react"
import getAllCommentByProductId from '../../schema/queries/getAllCommentByProductId'
import { useLogin } from "../../hooks/useLogin"
import createComment from "../../schema/mutations/createComment"

export default function Comment({ productId }) {
  const { me } = useLogin()
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const commentRef = useRef('')

  useEffect(() => {
    const getInitialData = async () => {
      const commentInit = await getAllCommentByProductId(productId)
      setComments(commentInit)
    }

    getInitialData()
  }, [productId])

  useEffect(() => {
    const listener = async (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault()
        await executeCreateComment()
      }
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    }
  }, [])

  const executeCreateComment = async () => {
    if (!me) {
      alert('Bạn vui lòng đăng nhập để bình luận! ')
    }
    try {
      await createComment({
        content: commentRef.current,
        product_id: productId,
        customer_id: me.id,
      })
      const commentInit = await getAllCommentByProductId(productId)
      setComments(commentInit)
      setComment('')
      commentRef.current = ''
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="pro__tab__content__inner">
      <div style={{ maxHeight: 500, paddingTop: 20, overflow: 'hidden', overflowY: 'scroll' }}>
        {comments && comments.map((item, index) => {
          return (
            <div key={index} style={index > 0 ? { marginTop: 20 } : {}}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={item.customer.avatar || '/static/images/defaultAva.png'} width="50px" height="50px" style={{ borderRadius: "50%" }} />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 10 }}>
                  <span style={{ color: '#c43b68', fontSize: 18 }}>{item.customer.name}</span>
                  <span style={{ fontSize: 12 }}><i>{new Date(Number(item.created_at)).toLocaleString()}</i></span>
                </div>
              </div>
              <p style={{ color: 'black', fontSize: 18, paddingLeft: 55, paddingTop: 10 }}>- {item.content}</p>
            </div>
          )
        })}
      </div>
      <textarea
        name="message"
        className="form-control"
        rows="5"
        placeholder="Nhập bình luận của bạn..."
        cols="20"
        value={comment}
        style={{ marginTop: 20, fontSize: 18 }}
        onChange={(event) => {
          setComment(event.target.value)
          commentRef.current = event.target.value
        }}
      />
    </div>
  )
}