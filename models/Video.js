import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: 'File URL is required'
  },
  title: {
    type: String,
    required: 'Title URL is required'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // video에 comments 의 id 를 array로 저장하여 어떤 comment들이 들어있는지 알 수 있음
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

const model = mongoose.model('Video', VideoSchema)
export default model