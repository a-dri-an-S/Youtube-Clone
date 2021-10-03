import express from "express";
import { PrismaClient, VideoLikeDistinctFieldEnum } from ".prisma/client";
import { protect } from "../middleware/authorization";
import { getVideoViews } from './video';

const prisma = new PrismaClient();


function getUserRoutes() {
  const router = express.Router();

  router.get('/liked-videos', protect, getLikedVideos);


  return router;
}

async function getVideos(model, req, res) {
  const videoRelations = await model.findMany({
    where: {
      userId: req.user.id
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const videoIds = videoRelations.map(videoLike => videoLike.videoId);

  let videos = await prisma.video.findMany({
    where: {
      id: {
        in: videoIds
      }
    }, include: {
      user: true
    }
  });

  if (!videos.length) {
    return res.status(200).json({ videos });
  }

  videos = await getVideoViews(videos);

  res.status(200).json({ videos });
}

async function getLikedVideos(req, res) {
  
}

async function getHistory(req, res) {

}

async function toggleSubscribe(req, res, next) {}

async function getFeed(req, res) {}

async function searchUser(req, res, next) {}

async function getRecommendedChannels(req, res) {}

async function getProfile(req, res, next) {}

async function editUser(req, res) {}

export { getUserRoutes };
