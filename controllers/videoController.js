import routes from '../routes'
import Video from '../models/Video'

export const home = async(req, res) => {
  try {
    const videos = await Video.find({})
    res.render('home', { pageTitle: 'HOME', videos })
  } catch(error) {
    console.log(error)
    res.render('home', { pageTitle: 'HOME', videos })
  }
}

export const search = (req, res) => {
  // const searchingBy = req.query.term
  const {query: { term: searchingBy }} = req
  console.log(searchingBy)
  res.render('search', { pageTitle: 'Search', searchingBy: searchingBy, videos })
}

export const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload' })

export const postUpload = (req, res) => {
  const {
    body: {
      file, title, description
    }
  } = req
  // To Do: upload and save video
  res.redirect(routes.videoDetail(3243883))
}

export const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'Video Detail' })

export const editVideo = (req, res) => res.render('editVideo', { pageTitle: 'Edit Video' })

export const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' })