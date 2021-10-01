import { PrismaClient, VideoDistinctFieldEnum } from ".prisma/client";
import express from "express";

const prisma = new PrismaClient();

function getVideoRoutes() {
  const router = express.Router();

  router.get('/', getRecommendedVideos)

  return router;
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
  
  return res.status(200).json({ videos })
}


async function getTrendingVideos(req, res) {}

async function searchVideos(req, res, next) {}

async function addVideo(req, res) {}

async function addComment(req, res, next) {}

async function deleteComment(req, res) {}

async function addVideoView(req, res, next) {}

async function likeVideo(req, res, next) {}

async function dislikeVideo(req, res, next) {}

async function getVideo(req, res, next) {}

async function deleteVideo(req, res) {}

export { getVideoRoutes };
