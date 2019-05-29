import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Text is required'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // 코멘트에 video의 아이디를 저장하여 어느 비디오에 달린 댓글인지 알 수 있음
  // video: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Video"
  // }
})

const model = mongoose.model('Comment', CommentSchema)
export default model