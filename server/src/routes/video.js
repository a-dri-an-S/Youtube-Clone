import { PrismaClient, VideoDistinctFieldEnum } from ".prisma/client";
import express from "express";
import { protect } from "../middleware/authorization";

const prisma = new PrismaClient();

function getVideoRoutes() {
  const router = express.Router();

  router.get('/', getRecommendedVideos);
  router.get('/trending', getTrendingVideos);
  router.get('/search', searchVideos);

  router.post('/', protect, addVideo);
  router.post('/:videoId/comment', protect, addComment);


  return router;
}

async function getVideoViews(videos) {
  for (const video of videos) {
    const views = await prisma.view.count({
      where: {
        videoId: {
          equals: video.id,
        },
      },
    });
    video.views = views;
  }
  return videos;
}

async function getRecommendedVideos(req, res) {
  let videos = await prisma.video.findMany({
    include: {
      user: true
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  if (!videos.length) {
    return res.status(200).json({ videos })
  }

  videos = await getVideoViews(videos)

  return res.status(200).json({ videos })
}


async function getTrendingVideos(req, res) {
  let videos = await prisma.video.findMany({
    include: {
      user: true
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);
  videos.sort((a, b) => b.views - a.views);

  return res.status(200).json({ videos });
}

async function searchVideos(req, res, next) {
  if (!req.query.query) {
    return next({
      message: "Please enter a search query",
      statusCode: 400,
    })
  }

  let videos = await prisma.video.findMany({
    include: {
      user: true
    },
    where: {
      OR: [
        {
          title: {
            contains: req.query.query,
            mode: "insensitive"
          }
        },
        {
          description: {
            contains: req.query.query,
            mode: "insensitive"
          }
        }
      ]
    }
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);
  videos.sort((a, b) => b.views - a.views);

  return res.status(200).json({ videos });
}

async function addVideo(req, res) {
  const { title, description, url, thumbnail } = req.body;

  const video = await prisma.video.create({
    data: {
      title,
      description,
      url,
      thumbnail,
      user: {
        connect: {
          id: req.user.id
        }
      }
    }
  });

  res.status(200).json({ video });
}

async function addComment(req, res, next) {
  const video = await prisma.video.findUnique({
    where: {
      id: req.params.videoId
    }
  })

  if (!video) {
    return next({
      message: `No video found with id: "${req.params.videoId}"`,
      statusCode: 404
    })
  }

  const comment = await prisma.comment.create({
    data: {
      text: req.body.text,
      user: {
        connect: {
          id: req.user.id
        },
      },
      video: {
        connect: {
          id: req.params.videoId
        }
      }
    }
  });

  res.status(200).json({ comment });
}

async function deleteComment(req, res) {}

async function addVideoView(req, res, next) {}

async function likeVideo(req, res, next) {}

async function dislikeVideo(req, res, next) {}

async function getVideo(req, res, next) {}

async function deleteVideo(req, res) {}

export { getVideoRoutes };
